# `databaseAutonomousDatabase` Submodule <a name="`databaseAutonomousDatabase` Submodule" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseAutonomousDatabase <a name="DatabaseAutonomousDatabase" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database oci_database_autonomous_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabase.DatabaseAutonomousDatabase(scope: Construct, id: string, config: DatabaseAutonomousDatabaseConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig">DatabaseAutonomousDatabaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig">DatabaseAutonomousDatabaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putCustomerContacts">putCustomerContacts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putDbToolsDetails">putDbToolsDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putEncryptionKey">putEncryptionKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putLongTermBackupSchedule">putLongTermBackupSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putResourcePoolSummary">putResourcePoolSummary</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putScheduledOperations">putScheduledOperations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAdminPassword">resetAdminPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetArePrimaryWhitelistedIpsUsed">resetArePrimaryWhitelistedIpsUsed</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAutonomousContainerDatabaseId">resetAutonomousContainerDatabaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAutonomousDatabaseBackupId">resetAutonomousDatabaseBackupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAutonomousDatabaseId">resetAutonomousDatabaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAutonomousMaintenanceScheduleType">resetAutonomousMaintenanceScheduleType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAutoRefreshFrequencyInSeconds">resetAutoRefreshFrequencyInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAutoRefreshPointLagInSeconds">resetAutoRefreshPointLagInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetBackupRetentionPeriodInDays">resetBackupRetentionPeriodInDays</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetByolComputeCountLimit">resetByolComputeCountLimit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetCharacterSet">resetCharacterSet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetCloneType">resetCloneType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetComputeCount">resetComputeCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetComputeModel">resetComputeModel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetCpuCoreCount">resetCpuCoreCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetCustomerContacts">resetCustomerContacts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDatabaseEdition">resetDatabaseEdition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDatabaseManagementStatus">resetDatabaseManagementStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDataSafeStatus">resetDataSafeStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDataStorageSizeInGb">resetDataStorageSizeInGb</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDataStorageSizeInTbs">resetDataStorageSizeInTbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDbToolsDetails">resetDbToolsDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDbVersion">resetDbVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDbWorkload">resetDbWorkload</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDisasterRecoveryType">resetDisasterRecoveryType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetEncryptionKey">resetEncryptionKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetInMemoryPercentage">resetInMemoryPercentage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsAccessControlEnabled">resetIsAccessControlEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsAutoScalingEnabled">resetIsAutoScalingEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsAutoScalingForStorageEnabled">resetIsAutoScalingForStorageEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsDataGuardEnabled">resetIsDataGuardEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsDedicated">resetIsDedicated</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsDevTier">resetIsDevTier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsFreeTier">resetIsFreeTier</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsLocalDataGuardEnabled">resetIsLocalDataGuardEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsMtlsConnectionRequired">resetIsMtlsConnectionRequired</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsPreviewVersionWithServiceTermsAccepted">resetIsPreviewVersionWithServiceTermsAccepted</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsRefreshableClone">resetIsRefreshableClone</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsReplicateAutomaticBackups">resetIsReplicateAutomaticBackups</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsShrinkOnly">resetIsShrinkOnly</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetLicenseModel">resetLicenseModel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetLocalAdgAutoFailoverMaxDataLossLimit">resetLocalAdgAutoFailoverMaxDataLossLimit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetLongTermBackupSchedule">resetLongTermBackupSchedule</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetMaxCpuCoreCount">resetMaxCpuCoreCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetNcharacterSet">resetNcharacterSet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetNsgIds">resetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetOcpuCount">resetOcpuCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetOpenMode">resetOpenMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetOperationsInsightsStatus">resetOperationsInsightsStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetPermissionLevel">resetPermissionLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetPrivateEndpointIp">resetPrivateEndpointIp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetPrivateEndpointLabel">resetPrivateEndpointLabel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetRefreshableMode">resetRefreshableMode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetRemoteDisasterRecoveryType">resetRemoteDisasterRecoveryType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetResourcePoolLeaderId">resetResourcePoolLeaderId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetResourcePoolSummary">resetResourcePoolSummary</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetRotateKeyTrigger">resetRotateKeyTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetScheduledOperations">resetScheduledOperations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSecretId">resetSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSecretVersionNumber">resetSecretVersionNumber</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSecurityAttributes">resetSecurityAttributes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetShrinkAdbTrigger">resetShrinkAdbTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSourceId">resetSourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetStandbyWhitelistedIps">resetStandbyWhitelistedIps</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSubscriptionId">resetSubscriptionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSwitchoverTo">resetSwitchoverTo</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSwitchoverToRemotePeerId">resetSwitchoverToRemotePeerId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetTimeOfAutoRefreshStart">resetTimeOfAutoRefreshStart</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetTimestamp">resetTimestamp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetUseLatestAvailableBackupTimeStamp">resetUseLatestAvailableBackupTimeStamp</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetVaultId">resetVaultId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetWhitelistedIps">resetWhitelistedIps</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomerContacts` <a name="putCustomerContacts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putCustomerContacts"></a>

```typescript
public putCustomerContacts(value: IResolvable | DatabaseAutonomousDatabaseCustomerContacts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putCustomerContacts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts">DatabaseAutonomousDatabaseCustomerContacts</a>[]

---

##### `putDbToolsDetails` <a name="putDbToolsDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putDbToolsDetails"></a>

```typescript
public putDbToolsDetails(value: IResolvable | DatabaseAutonomousDatabaseDbToolsDetails[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putDbToolsDetails.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails">DatabaseAutonomousDatabaseDbToolsDetails</a>[]

---

##### `putEncryptionKey` <a name="putEncryptionKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putEncryptionKey"></a>

```typescript
public putEncryptionKey(value: DatabaseAutonomousDatabaseEncryptionKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putEncryptionKey.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey">DatabaseAutonomousDatabaseEncryptionKey</a>

---

##### `putLongTermBackupSchedule` <a name="putLongTermBackupSchedule" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putLongTermBackupSchedule"></a>

```typescript
public putLongTermBackupSchedule(value: IResolvable | DatabaseAutonomousDatabaseLongTermBackupSchedule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putLongTermBackupSchedule.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule">DatabaseAutonomousDatabaseLongTermBackupSchedule</a>[]

---

##### `putResourcePoolSummary` <a name="putResourcePoolSummary" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putResourcePoolSummary"></a>

```typescript
public putResourcePoolSummary(value: DatabaseAutonomousDatabaseResourcePoolSummary): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putResourcePoolSummary.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary">DatabaseAutonomousDatabaseResourcePoolSummary</a>

---

##### `putScheduledOperations` <a name="putScheduledOperations" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putScheduledOperations"></a>

```typescript
public putScheduledOperations(value: IResolvable | DatabaseAutonomousDatabaseScheduledOperations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putScheduledOperations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations">DatabaseAutonomousDatabaseScheduledOperations</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putTimeouts"></a>

```typescript
public putTimeouts(value: DatabaseAutonomousDatabaseTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts">DatabaseAutonomousDatabaseTimeouts</a>

---

##### `resetAdminPassword` <a name="resetAdminPassword" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAdminPassword"></a>

```typescript
public resetAdminPassword(): void
```

##### `resetArePrimaryWhitelistedIpsUsed` <a name="resetArePrimaryWhitelistedIpsUsed" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetArePrimaryWhitelistedIpsUsed"></a>

```typescript
public resetArePrimaryWhitelistedIpsUsed(): void
```

##### `resetAutonomousContainerDatabaseId` <a name="resetAutonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAutonomousContainerDatabaseId"></a>

```typescript
public resetAutonomousContainerDatabaseId(): void
```

##### `resetAutonomousDatabaseBackupId` <a name="resetAutonomousDatabaseBackupId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAutonomousDatabaseBackupId"></a>

```typescript
public resetAutonomousDatabaseBackupId(): void
```

##### `resetAutonomousDatabaseId` <a name="resetAutonomousDatabaseId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAutonomousDatabaseId"></a>

```typescript
public resetAutonomousDatabaseId(): void
```

##### `resetAutonomousMaintenanceScheduleType` <a name="resetAutonomousMaintenanceScheduleType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAutonomousMaintenanceScheduleType"></a>

```typescript
public resetAutonomousMaintenanceScheduleType(): void
```

##### `resetAutoRefreshFrequencyInSeconds` <a name="resetAutoRefreshFrequencyInSeconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAutoRefreshFrequencyInSeconds"></a>

```typescript
public resetAutoRefreshFrequencyInSeconds(): void
```

##### `resetAutoRefreshPointLagInSeconds` <a name="resetAutoRefreshPointLagInSeconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetAutoRefreshPointLagInSeconds"></a>

```typescript
public resetAutoRefreshPointLagInSeconds(): void
```

##### `resetBackupRetentionPeriodInDays` <a name="resetBackupRetentionPeriodInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetBackupRetentionPeriodInDays"></a>

```typescript
public resetBackupRetentionPeriodInDays(): void
```

##### `resetByolComputeCountLimit` <a name="resetByolComputeCountLimit" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetByolComputeCountLimit"></a>

```typescript
public resetByolComputeCountLimit(): void
```

##### `resetCharacterSet` <a name="resetCharacterSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetCharacterSet"></a>

```typescript
public resetCharacterSet(): void
```

##### `resetCloneType` <a name="resetCloneType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetCloneType"></a>

```typescript
public resetCloneType(): void
```

##### `resetComputeCount` <a name="resetComputeCount" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetComputeCount"></a>

```typescript
public resetComputeCount(): void
```

##### `resetComputeModel` <a name="resetComputeModel" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetComputeModel"></a>

```typescript
public resetComputeModel(): void
```

##### `resetCpuCoreCount` <a name="resetCpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetCpuCoreCount"></a>

```typescript
public resetCpuCoreCount(): void
```

##### `resetCustomerContacts` <a name="resetCustomerContacts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetCustomerContacts"></a>

```typescript
public resetCustomerContacts(): void
```

##### `resetDatabaseEdition` <a name="resetDatabaseEdition" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDatabaseEdition"></a>

```typescript
public resetDatabaseEdition(): void
```

##### `resetDatabaseManagementStatus` <a name="resetDatabaseManagementStatus" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDatabaseManagementStatus"></a>

```typescript
public resetDatabaseManagementStatus(): void
```

##### `resetDataSafeStatus` <a name="resetDataSafeStatus" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDataSafeStatus"></a>

```typescript
public resetDataSafeStatus(): void
```

##### `resetDataStorageSizeInGb` <a name="resetDataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDataStorageSizeInGb"></a>

```typescript
public resetDataStorageSizeInGb(): void
```

##### `resetDataStorageSizeInTbs` <a name="resetDataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDataStorageSizeInTbs"></a>

```typescript
public resetDataStorageSizeInTbs(): void
```

##### `resetDbToolsDetails` <a name="resetDbToolsDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDbToolsDetails"></a>

```typescript
public resetDbToolsDetails(): void
```

##### `resetDbVersion` <a name="resetDbVersion" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDbVersion"></a>

```typescript
public resetDbVersion(): void
```

##### `resetDbWorkload` <a name="resetDbWorkload" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDbWorkload"></a>

```typescript
public resetDbWorkload(): void
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDefinedTags"></a>

```typescript
public resetDefinedTags(): void
```

##### `resetDisasterRecoveryType` <a name="resetDisasterRecoveryType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDisasterRecoveryType"></a>

```typescript
public resetDisasterRecoveryType(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEncryptionKey` <a name="resetEncryptionKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetEncryptionKey"></a>

```typescript
public resetEncryptionKey(): void
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetFreeformTags"></a>

```typescript
public resetFreeformTags(): void
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInMemoryPercentage` <a name="resetInMemoryPercentage" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetInMemoryPercentage"></a>

```typescript
public resetInMemoryPercentage(): void
```

##### `resetIsAccessControlEnabled` <a name="resetIsAccessControlEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsAccessControlEnabled"></a>

```typescript
public resetIsAccessControlEnabled(): void
```

##### `resetIsAutoScalingEnabled` <a name="resetIsAutoScalingEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsAutoScalingEnabled"></a>

```typescript
public resetIsAutoScalingEnabled(): void
```

##### `resetIsAutoScalingForStorageEnabled` <a name="resetIsAutoScalingForStorageEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsAutoScalingForStorageEnabled"></a>

```typescript
public resetIsAutoScalingForStorageEnabled(): void
```

##### `resetIsDataGuardEnabled` <a name="resetIsDataGuardEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsDataGuardEnabled"></a>

```typescript
public resetIsDataGuardEnabled(): void
```

##### `resetIsDedicated` <a name="resetIsDedicated" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsDedicated"></a>

```typescript
public resetIsDedicated(): void
```

##### `resetIsDevTier` <a name="resetIsDevTier" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsDevTier"></a>

```typescript
public resetIsDevTier(): void
```

##### `resetIsFreeTier` <a name="resetIsFreeTier" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsFreeTier"></a>

```typescript
public resetIsFreeTier(): void
```

##### `resetIsLocalDataGuardEnabled` <a name="resetIsLocalDataGuardEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsLocalDataGuardEnabled"></a>

```typescript
public resetIsLocalDataGuardEnabled(): void
```

##### `resetIsMtlsConnectionRequired` <a name="resetIsMtlsConnectionRequired" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsMtlsConnectionRequired"></a>

```typescript
public resetIsMtlsConnectionRequired(): void
```

##### `resetIsPreviewVersionWithServiceTermsAccepted` <a name="resetIsPreviewVersionWithServiceTermsAccepted" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsPreviewVersionWithServiceTermsAccepted"></a>

```typescript
public resetIsPreviewVersionWithServiceTermsAccepted(): void
```

##### `resetIsRefreshableClone` <a name="resetIsRefreshableClone" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsRefreshableClone"></a>

```typescript
public resetIsRefreshableClone(): void
```

##### `resetIsReplicateAutomaticBackups` <a name="resetIsReplicateAutomaticBackups" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsReplicateAutomaticBackups"></a>

```typescript
public resetIsReplicateAutomaticBackups(): void
```

##### `resetIsShrinkOnly` <a name="resetIsShrinkOnly" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetIsShrinkOnly"></a>

```typescript
public resetIsShrinkOnly(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetLicenseModel` <a name="resetLicenseModel" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetLicenseModel"></a>

```typescript
public resetLicenseModel(): void
```

##### `resetLocalAdgAutoFailoverMaxDataLossLimit` <a name="resetLocalAdgAutoFailoverMaxDataLossLimit" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetLocalAdgAutoFailoverMaxDataLossLimit"></a>

```typescript
public resetLocalAdgAutoFailoverMaxDataLossLimit(): void
```

##### `resetLongTermBackupSchedule` <a name="resetLongTermBackupSchedule" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetLongTermBackupSchedule"></a>

```typescript
public resetLongTermBackupSchedule(): void
```

##### `resetMaxCpuCoreCount` <a name="resetMaxCpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetMaxCpuCoreCount"></a>

```typescript
public resetMaxCpuCoreCount(): void
```

##### `resetNcharacterSet` <a name="resetNcharacterSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetNcharacterSet"></a>

```typescript
public resetNcharacterSet(): void
```

##### `resetNsgIds` <a name="resetNsgIds" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetNsgIds"></a>

```typescript
public resetNsgIds(): void
```

##### `resetOcpuCount` <a name="resetOcpuCount" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetOcpuCount"></a>

```typescript
public resetOcpuCount(): void
```

##### `resetOpenMode` <a name="resetOpenMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetOpenMode"></a>

```typescript
public resetOpenMode(): void
```

##### `resetOperationsInsightsStatus` <a name="resetOperationsInsightsStatus" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetOperationsInsightsStatus"></a>

```typescript
public resetOperationsInsightsStatus(): void
```

##### `resetPermissionLevel` <a name="resetPermissionLevel" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetPermissionLevel"></a>

```typescript
public resetPermissionLevel(): void
```

##### `resetPrivateEndpointIp` <a name="resetPrivateEndpointIp" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetPrivateEndpointIp"></a>

```typescript
public resetPrivateEndpointIp(): void
```

##### `resetPrivateEndpointLabel` <a name="resetPrivateEndpointLabel" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetPrivateEndpointLabel"></a>

```typescript
public resetPrivateEndpointLabel(): void
```

##### `resetRefreshableMode` <a name="resetRefreshableMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetRefreshableMode"></a>

```typescript
public resetRefreshableMode(): void
```

##### `resetRemoteDisasterRecoveryType` <a name="resetRemoteDisasterRecoveryType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetRemoteDisasterRecoveryType"></a>

```typescript
public resetRemoteDisasterRecoveryType(): void
```

##### `resetResourcePoolLeaderId` <a name="resetResourcePoolLeaderId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetResourcePoolLeaderId"></a>

```typescript
public resetResourcePoolLeaderId(): void
```

##### `resetResourcePoolSummary` <a name="resetResourcePoolSummary" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetResourcePoolSummary"></a>

```typescript
public resetResourcePoolSummary(): void
```

##### `resetRotateKeyTrigger` <a name="resetRotateKeyTrigger" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetRotateKeyTrigger"></a>

```typescript
public resetRotateKeyTrigger(): void
```

##### `resetScheduledOperations` <a name="resetScheduledOperations" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetScheduledOperations"></a>

```typescript
public resetScheduledOperations(): void
```

##### `resetSecretId` <a name="resetSecretId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSecretId"></a>

```typescript
public resetSecretId(): void
```

##### `resetSecretVersionNumber` <a name="resetSecretVersionNumber" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSecretVersionNumber"></a>

```typescript
public resetSecretVersionNumber(): void
```

##### `resetSecurityAttributes` <a name="resetSecurityAttributes" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSecurityAttributes"></a>

```typescript
public resetSecurityAttributes(): void
```

##### `resetShrinkAdbTrigger` <a name="resetShrinkAdbTrigger" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetShrinkAdbTrigger"></a>

```typescript
public resetShrinkAdbTrigger(): void
```

##### `resetSource` <a name="resetSource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSource"></a>

```typescript
public resetSource(): void
```

##### `resetSourceId` <a name="resetSourceId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSourceId"></a>

```typescript
public resetSourceId(): void
```

##### `resetStandbyWhitelistedIps` <a name="resetStandbyWhitelistedIps" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetStandbyWhitelistedIps"></a>

```typescript
public resetStandbyWhitelistedIps(): void
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetState"></a>

```typescript
public resetState(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```

##### `resetSubscriptionId` <a name="resetSubscriptionId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSubscriptionId"></a>

```typescript
public resetSubscriptionId(): void
```

##### `resetSwitchoverTo` <a name="resetSwitchoverTo" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSwitchoverTo"></a>

```typescript
public resetSwitchoverTo(): void
```

##### `resetSwitchoverToRemotePeerId` <a name="resetSwitchoverToRemotePeerId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetSwitchoverToRemotePeerId"></a>

```typescript
public resetSwitchoverToRemotePeerId(): void
```

##### `resetTimeOfAutoRefreshStart` <a name="resetTimeOfAutoRefreshStart" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetTimeOfAutoRefreshStart"></a>

```typescript
public resetTimeOfAutoRefreshStart(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimestamp` <a name="resetTimestamp" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetTimestamp"></a>

```typescript
public resetTimestamp(): void
```

##### `resetUseLatestAvailableBackupTimeStamp` <a name="resetUseLatestAvailableBackupTimeStamp" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetUseLatestAvailableBackupTimeStamp"></a>

```typescript
public resetUseLatestAvailableBackupTimeStamp(): void
```

##### `resetVaultId` <a name="resetVaultId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetVaultId"></a>

```typescript
public resetVaultId(): void
```

##### `resetWhitelistedIps` <a name="resetWhitelistedIps" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.resetWhitelistedIps"></a>

```typescript
public resetWhitelistedIps(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseAutonomousDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.isConstruct"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

databaseAutonomousDatabase.DatabaseAutonomousDatabase.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.isTerraformElement"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

databaseAutonomousDatabase.DatabaseAutonomousDatabase.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.isTerraformResource"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

databaseAutonomousDatabase.DatabaseAutonomousDatabase.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.generateConfigForImport"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

databaseAutonomousDatabase.DatabaseAutonomousDatabase.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DatabaseAutonomousDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatabaseAutonomousDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatabaseAutonomousDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseAutonomousDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.actualUsedDataStorageSizeInTbs">actualUsedDataStorageSizeInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.allocatedStorageSizeInTbs">allocatedStorageSizeInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.apexDetails">apexDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList">DatabaseAutonomousDatabaseApexDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.availableUpgradeVersions">availableUpgradeVersions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.backupConfig">backupConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList">DatabaseAutonomousDatabaseBackupConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.clusterPlacementGroupId">clusterPlacementGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.connectionStrings">connectionStrings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList">DatabaseAutonomousDatabaseConnectionStringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.connectionUrls">connectionUrls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList">DatabaseAutonomousDatabaseConnectionUrlsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.customerContacts">customerContacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList">DatabaseAutonomousDatabaseCustomerContactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataguardRegionType">dataguardRegionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbToolsDetails">dbToolsDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList">DatabaseAutonomousDatabaseDbToolsDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.disasterRecoveryRegionType">disasterRecoveryRegionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.encryptionKey">encryptionKey</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference">DatabaseAutonomousDatabaseEncryptionKeyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.encryptionKeyHistoryEntry">encryptionKeyHistoryEntry</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList">DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.failedDataRecoveryInSeconds">failedDataRecoveryInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.infrastructureType">infrastructureType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.inMemoryAreaInGbs">inMemoryAreaInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isPreview">isPreview</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isReconnectCloneEnabled">isReconnectCloneEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isRemoteDataGuardEnabled">isRemoteDataGuardEnabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.keyHistoryEntry">keyHistoryEntry</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList">DatabaseAutonomousDatabaseKeyHistoryEntryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.keyStoreId">keyStoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.keyStoreWalletName">keyStoreWalletName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.kmsKeyLifecycleDetails">kmsKeyLifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.kmsKeyVersionId">kmsKeyVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.localDisasterRecoveryType">localDisasterRecoveryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.localStandbyDb">localStandbyDb</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList">DatabaseAutonomousDatabaseLocalStandbyDbList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.longTermBackupSchedule">longTermBackupSchedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList">DatabaseAutonomousDatabaseLongTermBackupScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.memoryPerOracleComputeUnitInGbs">memoryPerOracleComputeUnitInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.netServicesArchitecture">netServicesArchitecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.nextLongTermBackupTimeStamp">nextLongTermBackupTimeStamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.peerDbIds">peerDbIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.privateEndpoint">privateEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.provisionableCpus">provisionableCpus</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.publicConnectionUrls">publicConnectionUrls</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList">DatabaseAutonomousDatabasePublicConnectionUrlsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.publicEndpoint">publicEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.refreshableStatus">refreshableStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.remoteDisasterRecoveryConfiguration">remoteDisasterRecoveryConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList">DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.resourcePoolSummary">resourcePoolSummary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference">DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.scheduledOperations">scheduledOperations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList">DatabaseAutonomousDatabaseScheduledOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.serviceConsoleUrl">serviceConsoleUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.standbyDb">standbyDb</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList">DatabaseAutonomousDatabaseStandbyDbList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.supportedRegionsToCloneTo">supportedRegionsToCloneTo</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.systemTags">systemTags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeCreated">timeCreated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeDataGuardRoleChanged">timeDataGuardRoleChanged</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeDeletionOfFreeAutonomousDatabase">timeDeletionOfFreeAutonomousDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeDisasterRecoveryRoleChanged">timeDisasterRecoveryRoleChanged</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeLocalDataGuardEnabled">timeLocalDataGuardEnabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeMaintenanceBegin">timeMaintenanceBegin</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeMaintenanceEnd">timeMaintenanceEnd</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfJoiningResourcePool">timeOfJoiningResourcePool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfLastFailover">timeOfLastFailover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfLastRefresh">timeOfLastRefresh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfLastRefreshPoint">timeOfLastRefreshPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfLastSwitchover">timeOfLastSwitchover</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfNextRefresh">timeOfNextRefresh</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference">DatabaseAutonomousDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeReclamationOfFreeAutonomousDatabase">timeReclamationOfFreeAutonomousDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeUndeleted">timeUndeleted</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeUntilReconnectCloneEnabled">timeUntilReconnectCloneEnabled</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.totalBackupStorageSizeInGbs">totalBackupStorageSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.usedDataStorageSizeInGbs">usedDataStorageSizeInGbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.usedDataStorageSizeInTbs">usedDataStorageSizeInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.adminPasswordInput">adminPasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.arePrimaryWhitelistedIpsUsedInput">arePrimaryWhitelistedIpsUsedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousContainerDatabaseIdInput">autonomousContainerDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousDatabaseBackupIdInput">autonomousDatabaseBackupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousDatabaseIdInput">autonomousDatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousMaintenanceScheduleTypeInput">autonomousMaintenanceScheduleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autoRefreshFrequencyInSecondsInput">autoRefreshFrequencyInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autoRefreshPointLagInSecondsInput">autoRefreshPointLagInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.backupRetentionPeriodInDaysInput">backupRetentionPeriodInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.byolComputeCountLimitInput">byolComputeCountLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.characterSetInput">characterSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.cloneTypeInput">cloneTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.compartmentIdInput">compartmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.computeCountInput">computeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.computeModelInput">computeModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.cpuCoreCountInput">cpuCoreCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.customerContactsInput">customerContactsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts">DatabaseAutonomousDatabaseCustomerContacts</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.databaseEditionInput">databaseEditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.databaseManagementStatusInput">databaseManagementStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataSafeStatusInput">dataSafeStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataStorageSizeInGbInput">dataStorageSizeInGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataStorageSizeInTbsInput">dataStorageSizeInTbsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbNameInput">dbNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbToolsDetailsInput">dbToolsDetailsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails">DatabaseAutonomousDatabaseDbToolsDetails</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbVersionInput">dbVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbWorkloadInput">dbWorkloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.definedTagsInput">definedTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.disasterRecoveryTypeInput">disasterRecoveryTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.encryptionKeyInput">encryptionKeyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey">DatabaseAutonomousDatabaseEncryptionKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.freeformTagsInput">freeformTagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.inMemoryPercentageInput">inMemoryPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isAccessControlEnabledInput">isAccessControlEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isAutoScalingEnabledInput">isAutoScalingEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isAutoScalingForStorageEnabledInput">isAutoScalingForStorageEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isDataGuardEnabledInput">isDataGuardEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isDedicatedInput">isDedicatedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isDevTierInput">isDevTierInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isFreeTierInput">isFreeTierInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isLocalDataGuardEnabledInput">isLocalDataGuardEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isMtlsConnectionRequiredInput">isMtlsConnectionRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isPreviewVersionWithServiceTermsAcceptedInput">isPreviewVersionWithServiceTermsAcceptedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isRefreshableCloneInput">isRefreshableCloneInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isReplicateAutomaticBackupsInput">isReplicateAutomaticBackupsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isShrinkOnlyInput">isShrinkOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.licenseModelInput">licenseModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimitInput">localAdgAutoFailoverMaxDataLossLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.longTermBackupScheduleInput">longTermBackupScheduleInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule">DatabaseAutonomousDatabaseLongTermBackupSchedule</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.maxCpuCoreCountInput">maxCpuCoreCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.ncharacterSetInput">ncharacterSetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.nsgIdsInput">nsgIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.ocpuCountInput">ocpuCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.openModeInput">openModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.operationsInsightsStatusInput">operationsInsightsStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.permissionLevelInput">permissionLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.privateEndpointIpInput">privateEndpointIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.privateEndpointLabelInput">privateEndpointLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.refreshableModeInput">refreshableModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.remoteDisasterRecoveryTypeInput">remoteDisasterRecoveryTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.resourcePoolLeaderIdInput">resourcePoolLeaderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.resourcePoolSummaryInput">resourcePoolSummaryInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary">DatabaseAutonomousDatabaseResourcePoolSummary</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.rotateKeyTriggerInput">rotateKeyTriggerInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.scheduledOperationsInput">scheduledOperationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations">DatabaseAutonomousDatabaseScheduledOperations</a>[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.secretIdInput">secretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.secretVersionNumberInput">secretVersionNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.securityAttributesInput">securityAttributesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.shrinkAdbTriggerInput">shrinkAdbTriggerInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.sourceIdInput">sourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.sourceInput">sourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.standbyWhitelistedIpsInput">standbyWhitelistedIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.stateInput">stateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.subscriptionIdInput">subscriptionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.switchoverToInput">switchoverToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.switchoverToRemotePeerIdInput">switchoverToRemotePeerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfAutoRefreshStartInput">timeOfAutoRefreshStartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts">DatabaseAutonomousDatabaseTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timestampInput">timestampInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.useLatestAvailableBackupTimeStampInput">useLatestAvailableBackupTimeStampInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.vaultIdInput">vaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.whitelistedIpsInput">whitelistedIpsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.adminPassword">adminPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.arePrimaryWhitelistedIpsUsed">arePrimaryWhitelistedIpsUsed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousContainerDatabaseId">autonomousContainerDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousDatabaseBackupId">autonomousDatabaseBackupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousMaintenanceScheduleType">autonomousMaintenanceScheduleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autoRefreshFrequencyInSeconds">autoRefreshFrequencyInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autoRefreshPointLagInSeconds">autoRefreshPointLagInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.backupRetentionPeriodInDays">backupRetentionPeriodInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.byolComputeCountLimit">byolComputeCountLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.characterSet">characterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.cloneType">cloneType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.compartmentId">compartmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.computeCount">computeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.computeModel">computeModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.cpuCoreCount">cpuCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.databaseEdition">databaseEdition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.databaseManagementStatus">databaseManagementStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataSafeStatus">dataSafeStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataStorageSizeInGb">dataStorageSizeInGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataStorageSizeInTbs">dataStorageSizeInTbs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbName">dbName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbVersion">dbVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbWorkload">dbWorkload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.disasterRecoveryType">disasterRecoveryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.inMemoryPercentage">inMemoryPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isAccessControlEnabled">isAccessControlEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isAutoScalingEnabled">isAutoScalingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isAutoScalingForStorageEnabled">isAutoScalingForStorageEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isDataGuardEnabled">isDataGuardEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isDedicated">isDedicated</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isDevTier">isDevTier</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isFreeTier">isFreeTier</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isLocalDataGuardEnabled">isLocalDataGuardEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isMtlsConnectionRequired">isMtlsConnectionRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isPreviewVersionWithServiceTermsAccepted">isPreviewVersionWithServiceTermsAccepted</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isRefreshableClone">isRefreshableClone</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isReplicateAutomaticBackups">isReplicateAutomaticBackups</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isShrinkOnly">isShrinkOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.licenseModel">licenseModel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimit">localAdgAutoFailoverMaxDataLossLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.maxCpuCoreCount">maxCpuCoreCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.ncharacterSet">ncharacterSet</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.ocpuCount">ocpuCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.openMode">openMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.operationsInsightsStatus">operationsInsightsStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.permissionLevel">permissionLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.privateEndpointIp">privateEndpointIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.privateEndpointLabel">privateEndpointLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.refreshableMode">refreshableMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.remoteDisasterRecoveryType">remoteDisasterRecoveryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.resourcePoolLeaderId">resourcePoolLeaderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.rotateKeyTrigger">rotateKeyTrigger</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.secretVersionNumber">secretVersionNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.securityAttributes">securityAttributes</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.shrinkAdbTrigger">shrinkAdbTrigger</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.source">source</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.sourceId">sourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.standbyWhitelistedIps">standbyWhitelistedIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.switchoverTo">switchoverTo</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.switchoverToRemotePeerId">switchoverToRemotePeerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfAutoRefreshStart">timeOfAutoRefreshStart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timestamp">timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.useLatestAvailableBackupTimeStamp">useLatestAvailableBackupTimeStamp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.vaultId">vaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.whitelistedIps">whitelistedIps</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `actualUsedDataStorageSizeInTbs`<sup>Required</sup> <a name="actualUsedDataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.actualUsedDataStorageSizeInTbs"></a>

```typescript
public readonly actualUsedDataStorageSizeInTbs: number;
```

- *Type:* number

---

##### `allocatedStorageSizeInTbs`<sup>Required</sup> <a name="allocatedStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.allocatedStorageSizeInTbs"></a>

```typescript
public readonly allocatedStorageSizeInTbs: number;
```

- *Type:* number

---

##### `apexDetails`<sup>Required</sup> <a name="apexDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.apexDetails"></a>

```typescript
public readonly apexDetails: DatabaseAutonomousDatabaseApexDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList">DatabaseAutonomousDatabaseApexDetailsList</a>

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `availableUpgradeVersions`<sup>Required</sup> <a name="availableUpgradeVersions" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.availableUpgradeVersions"></a>

```typescript
public readonly availableUpgradeVersions: string[];
```

- *Type:* string[]

---

##### `backupConfig`<sup>Required</sup> <a name="backupConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.backupConfig"></a>

```typescript
public readonly backupConfig: DatabaseAutonomousDatabaseBackupConfigList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList">DatabaseAutonomousDatabaseBackupConfigList</a>

---

##### `clusterPlacementGroupId`<sup>Required</sup> <a name="clusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.clusterPlacementGroupId"></a>

```typescript
public readonly clusterPlacementGroupId: string;
```

- *Type:* string

---

##### `connectionStrings`<sup>Required</sup> <a name="connectionStrings" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.connectionStrings"></a>

```typescript
public readonly connectionStrings: DatabaseAutonomousDatabaseConnectionStringsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList">DatabaseAutonomousDatabaseConnectionStringsList</a>

---

##### `connectionUrls`<sup>Required</sup> <a name="connectionUrls" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.connectionUrls"></a>

```typescript
public readonly connectionUrls: DatabaseAutonomousDatabaseConnectionUrlsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList">DatabaseAutonomousDatabaseConnectionUrlsList</a>

---

##### `customerContacts`<sup>Required</sup> <a name="customerContacts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.customerContacts"></a>

```typescript
public readonly customerContacts: DatabaseAutonomousDatabaseCustomerContactsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList">DatabaseAutonomousDatabaseCustomerContactsList</a>

---

##### `dataguardRegionType`<sup>Required</sup> <a name="dataguardRegionType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataguardRegionType"></a>

```typescript
public readonly dataguardRegionType: string;
```

- *Type:* string

---

##### `dbToolsDetails`<sup>Required</sup> <a name="dbToolsDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbToolsDetails"></a>

```typescript
public readonly dbToolsDetails: DatabaseAutonomousDatabaseDbToolsDetailsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList">DatabaseAutonomousDatabaseDbToolsDetailsList</a>

---

##### `disasterRecoveryRegionType`<sup>Required</sup> <a name="disasterRecoveryRegionType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.disasterRecoveryRegionType"></a>

```typescript
public readonly disasterRecoveryRegionType: string;
```

- *Type:* string

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: DatabaseAutonomousDatabaseEncryptionKeyOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference">DatabaseAutonomousDatabaseEncryptionKeyOutputReference</a>

---

##### `encryptionKeyHistoryEntry`<sup>Required</sup> <a name="encryptionKeyHistoryEntry" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.encryptionKeyHistoryEntry"></a>

```typescript
public readonly encryptionKeyHistoryEntry: DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList">DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList</a>

---

##### `failedDataRecoveryInSeconds`<sup>Required</sup> <a name="failedDataRecoveryInSeconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.failedDataRecoveryInSeconds"></a>

```typescript
public readonly failedDataRecoveryInSeconds: number;
```

- *Type:* number

---

##### `infrastructureType`<sup>Required</sup> <a name="infrastructureType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.infrastructureType"></a>

```typescript
public readonly infrastructureType: string;
```

- *Type:* string

---

##### `inMemoryAreaInGbs`<sup>Required</sup> <a name="inMemoryAreaInGbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.inMemoryAreaInGbs"></a>

```typescript
public readonly inMemoryAreaInGbs: number;
```

- *Type:* number

---

##### `isPreview`<sup>Required</sup> <a name="isPreview" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isPreview"></a>

```typescript
public readonly isPreview: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isReconnectCloneEnabled`<sup>Required</sup> <a name="isReconnectCloneEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isReconnectCloneEnabled"></a>

```typescript
public readonly isReconnectCloneEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isRemoteDataGuardEnabled`<sup>Required</sup> <a name="isRemoteDataGuardEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isRemoteDataGuardEnabled"></a>

```typescript
public readonly isRemoteDataGuardEnabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `keyHistoryEntry`<sup>Required</sup> <a name="keyHistoryEntry" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.keyHistoryEntry"></a>

```typescript
public readonly keyHistoryEntry: DatabaseAutonomousDatabaseKeyHistoryEntryList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList">DatabaseAutonomousDatabaseKeyHistoryEntryList</a>

---

##### `keyStoreId`<sup>Required</sup> <a name="keyStoreId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.keyStoreId"></a>

```typescript
public readonly keyStoreId: string;
```

- *Type:* string

---

##### `keyStoreWalletName`<sup>Required</sup> <a name="keyStoreWalletName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.keyStoreWalletName"></a>

```typescript
public readonly keyStoreWalletName: string;
```

- *Type:* string

---

##### `kmsKeyLifecycleDetails`<sup>Required</sup> <a name="kmsKeyLifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.kmsKeyLifecycleDetails"></a>

```typescript
public readonly kmsKeyLifecycleDetails: string;
```

- *Type:* string

---

##### `kmsKeyVersionId`<sup>Required</sup> <a name="kmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.kmsKeyVersionId"></a>

```typescript
public readonly kmsKeyVersionId: string;
```

- *Type:* string

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `localDisasterRecoveryType`<sup>Required</sup> <a name="localDisasterRecoveryType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.localDisasterRecoveryType"></a>

```typescript
public readonly localDisasterRecoveryType: string;
```

- *Type:* string

---

##### `localStandbyDb`<sup>Required</sup> <a name="localStandbyDb" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.localStandbyDb"></a>

```typescript
public readonly localStandbyDb: DatabaseAutonomousDatabaseLocalStandbyDbList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList">DatabaseAutonomousDatabaseLocalStandbyDbList</a>

---

##### `longTermBackupSchedule`<sup>Required</sup> <a name="longTermBackupSchedule" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.longTermBackupSchedule"></a>

```typescript
public readonly longTermBackupSchedule: DatabaseAutonomousDatabaseLongTermBackupScheduleList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList">DatabaseAutonomousDatabaseLongTermBackupScheduleList</a>

---

##### `memoryPerOracleComputeUnitInGbs`<sup>Required</sup> <a name="memoryPerOracleComputeUnitInGbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.memoryPerOracleComputeUnitInGbs"></a>

```typescript
public readonly memoryPerOracleComputeUnitInGbs: number;
```

- *Type:* number

---

##### `netServicesArchitecture`<sup>Required</sup> <a name="netServicesArchitecture" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.netServicesArchitecture"></a>

```typescript
public readonly netServicesArchitecture: string;
```

- *Type:* string

---

##### `nextLongTermBackupTimeStamp`<sup>Required</sup> <a name="nextLongTermBackupTimeStamp" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.nextLongTermBackupTimeStamp"></a>

```typescript
public readonly nextLongTermBackupTimeStamp: string;
```

- *Type:* string

---

##### `peerDbIds`<sup>Required</sup> <a name="peerDbIds" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.peerDbIds"></a>

```typescript
public readonly peerDbIds: string[];
```

- *Type:* string[]

---

##### `privateEndpoint`<sup>Required</sup> <a name="privateEndpoint" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.privateEndpoint"></a>

```typescript
public readonly privateEndpoint: string;
```

- *Type:* string

---

##### `provisionableCpus`<sup>Required</sup> <a name="provisionableCpus" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.provisionableCpus"></a>

```typescript
public readonly provisionableCpus: number[];
```

- *Type:* number[]

---

##### `publicConnectionUrls`<sup>Required</sup> <a name="publicConnectionUrls" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.publicConnectionUrls"></a>

```typescript
public readonly publicConnectionUrls: DatabaseAutonomousDatabasePublicConnectionUrlsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList">DatabaseAutonomousDatabasePublicConnectionUrlsList</a>

---

##### `publicEndpoint`<sup>Required</sup> <a name="publicEndpoint" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.publicEndpoint"></a>

```typescript
public readonly publicEndpoint: string;
```

- *Type:* string

---

##### `refreshableStatus`<sup>Required</sup> <a name="refreshableStatus" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.refreshableStatus"></a>

```typescript
public readonly refreshableStatus: string;
```

- *Type:* string

---

##### `remoteDisasterRecoveryConfiguration`<sup>Required</sup> <a name="remoteDisasterRecoveryConfiguration" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.remoteDisasterRecoveryConfiguration"></a>

```typescript
public readonly remoteDisasterRecoveryConfiguration: DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList">DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList</a>

---

##### `resourcePoolSummary`<sup>Required</sup> <a name="resourcePoolSummary" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.resourcePoolSummary"></a>

```typescript
public readonly resourcePoolSummary: DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference">DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference</a>

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `scheduledOperations`<sup>Required</sup> <a name="scheduledOperations" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.scheduledOperations"></a>

```typescript
public readonly scheduledOperations: DatabaseAutonomousDatabaseScheduledOperationsList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList">DatabaseAutonomousDatabaseScheduledOperationsList</a>

---

##### `serviceConsoleUrl`<sup>Required</sup> <a name="serviceConsoleUrl" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.serviceConsoleUrl"></a>

```typescript
public readonly serviceConsoleUrl: string;
```

- *Type:* string

---

##### `standbyDb`<sup>Required</sup> <a name="standbyDb" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.standbyDb"></a>

```typescript
public readonly standbyDb: DatabaseAutonomousDatabaseStandbyDbList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList">DatabaseAutonomousDatabaseStandbyDbList</a>

---

##### `supportedRegionsToCloneTo`<sup>Required</sup> <a name="supportedRegionsToCloneTo" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.supportedRegionsToCloneTo"></a>

```typescript
public readonly supportedRegionsToCloneTo: string[];
```

- *Type:* string[]

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.systemTags"></a>

```typescript
public readonly systemTags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeCreated"></a>

```typescript
public readonly timeCreated: string;
```

- *Type:* string

---

##### `timeDataGuardRoleChanged`<sup>Required</sup> <a name="timeDataGuardRoleChanged" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeDataGuardRoleChanged"></a>

```typescript
public readonly timeDataGuardRoleChanged: string;
```

- *Type:* string

---

##### `timeDeletionOfFreeAutonomousDatabase`<sup>Required</sup> <a name="timeDeletionOfFreeAutonomousDatabase" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeDeletionOfFreeAutonomousDatabase"></a>

```typescript
public readonly timeDeletionOfFreeAutonomousDatabase: string;
```

- *Type:* string

---

##### `timeDisasterRecoveryRoleChanged`<sup>Required</sup> <a name="timeDisasterRecoveryRoleChanged" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeDisasterRecoveryRoleChanged"></a>

```typescript
public readonly timeDisasterRecoveryRoleChanged: string;
```

- *Type:* string

---

##### `timeLocalDataGuardEnabled`<sup>Required</sup> <a name="timeLocalDataGuardEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeLocalDataGuardEnabled"></a>

```typescript
public readonly timeLocalDataGuardEnabled: string;
```

- *Type:* string

---

##### `timeMaintenanceBegin`<sup>Required</sup> <a name="timeMaintenanceBegin" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeMaintenanceBegin"></a>

```typescript
public readonly timeMaintenanceBegin: string;
```

- *Type:* string

---

##### `timeMaintenanceEnd`<sup>Required</sup> <a name="timeMaintenanceEnd" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeMaintenanceEnd"></a>

```typescript
public readonly timeMaintenanceEnd: string;
```

- *Type:* string

---

##### `timeOfJoiningResourcePool`<sup>Required</sup> <a name="timeOfJoiningResourcePool" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfJoiningResourcePool"></a>

```typescript
public readonly timeOfJoiningResourcePool: string;
```

- *Type:* string

---

##### `timeOfLastFailover`<sup>Required</sup> <a name="timeOfLastFailover" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfLastFailover"></a>

```typescript
public readonly timeOfLastFailover: string;
```

- *Type:* string

---

##### `timeOfLastRefresh`<sup>Required</sup> <a name="timeOfLastRefresh" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfLastRefresh"></a>

```typescript
public readonly timeOfLastRefresh: string;
```

- *Type:* string

---

##### `timeOfLastRefreshPoint`<sup>Required</sup> <a name="timeOfLastRefreshPoint" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfLastRefreshPoint"></a>

```typescript
public readonly timeOfLastRefreshPoint: string;
```

- *Type:* string

---

##### `timeOfLastSwitchover`<sup>Required</sup> <a name="timeOfLastSwitchover" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfLastSwitchover"></a>

```typescript
public readonly timeOfLastSwitchover: string;
```

- *Type:* string

---

##### `timeOfNextRefresh`<sup>Required</sup> <a name="timeOfNextRefresh" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfNextRefresh"></a>

```typescript
public readonly timeOfNextRefresh: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseAutonomousDatabaseTimeoutsOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference">DatabaseAutonomousDatabaseTimeoutsOutputReference</a>

---

##### `timeReclamationOfFreeAutonomousDatabase`<sup>Required</sup> <a name="timeReclamationOfFreeAutonomousDatabase" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeReclamationOfFreeAutonomousDatabase"></a>

```typescript
public readonly timeReclamationOfFreeAutonomousDatabase: string;
```

- *Type:* string

---

##### `timeUndeleted`<sup>Required</sup> <a name="timeUndeleted" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeUndeleted"></a>

```typescript
public readonly timeUndeleted: string;
```

- *Type:* string

---

##### `timeUntilReconnectCloneEnabled`<sup>Required</sup> <a name="timeUntilReconnectCloneEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeUntilReconnectCloneEnabled"></a>

```typescript
public readonly timeUntilReconnectCloneEnabled: string;
```

- *Type:* string

---

##### `totalBackupStorageSizeInGbs`<sup>Required</sup> <a name="totalBackupStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.totalBackupStorageSizeInGbs"></a>

```typescript
public readonly totalBackupStorageSizeInGbs: number;
```

- *Type:* number

---

##### `usedDataStorageSizeInGbs`<sup>Required</sup> <a name="usedDataStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.usedDataStorageSizeInGbs"></a>

```typescript
public readonly usedDataStorageSizeInGbs: number;
```

- *Type:* number

---

##### `usedDataStorageSizeInTbs`<sup>Required</sup> <a name="usedDataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.usedDataStorageSizeInTbs"></a>

```typescript
public readonly usedDataStorageSizeInTbs: number;
```

- *Type:* number

---

##### `adminPasswordInput`<sup>Optional</sup> <a name="adminPasswordInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.adminPasswordInput"></a>

```typescript
public readonly adminPasswordInput: string;
```

- *Type:* string

---

##### `arePrimaryWhitelistedIpsUsedInput`<sup>Optional</sup> <a name="arePrimaryWhitelistedIpsUsedInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.arePrimaryWhitelistedIpsUsedInput"></a>

```typescript
public readonly arePrimaryWhitelistedIpsUsedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autonomousContainerDatabaseIdInput`<sup>Optional</sup> <a name="autonomousContainerDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousContainerDatabaseIdInput"></a>

```typescript
public readonly autonomousContainerDatabaseIdInput: string;
```

- *Type:* string

---

##### `autonomousDatabaseBackupIdInput`<sup>Optional</sup> <a name="autonomousDatabaseBackupIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousDatabaseBackupIdInput"></a>

```typescript
public readonly autonomousDatabaseBackupIdInput: string;
```

- *Type:* string

---

##### `autonomousDatabaseIdInput`<sup>Optional</sup> <a name="autonomousDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousDatabaseIdInput"></a>

```typescript
public readonly autonomousDatabaseIdInput: string;
```

- *Type:* string

---

##### `autonomousMaintenanceScheduleTypeInput`<sup>Optional</sup> <a name="autonomousMaintenanceScheduleTypeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousMaintenanceScheduleTypeInput"></a>

```typescript
public readonly autonomousMaintenanceScheduleTypeInput: string;
```

- *Type:* string

---

##### `autoRefreshFrequencyInSecondsInput`<sup>Optional</sup> <a name="autoRefreshFrequencyInSecondsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autoRefreshFrequencyInSecondsInput"></a>

```typescript
public readonly autoRefreshFrequencyInSecondsInput: number;
```

- *Type:* number

---

##### `autoRefreshPointLagInSecondsInput`<sup>Optional</sup> <a name="autoRefreshPointLagInSecondsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autoRefreshPointLagInSecondsInput"></a>

```typescript
public readonly autoRefreshPointLagInSecondsInput: number;
```

- *Type:* number

---

##### `backupRetentionPeriodInDaysInput`<sup>Optional</sup> <a name="backupRetentionPeriodInDaysInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.backupRetentionPeriodInDaysInput"></a>

```typescript
public readonly backupRetentionPeriodInDaysInput: number;
```

- *Type:* number

---

##### `byolComputeCountLimitInput`<sup>Optional</sup> <a name="byolComputeCountLimitInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.byolComputeCountLimitInput"></a>

```typescript
public readonly byolComputeCountLimitInput: number;
```

- *Type:* number

---

##### `characterSetInput`<sup>Optional</sup> <a name="characterSetInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.characterSetInput"></a>

```typescript
public readonly characterSetInput: string;
```

- *Type:* string

---

##### `cloneTypeInput`<sup>Optional</sup> <a name="cloneTypeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.cloneTypeInput"></a>

```typescript
public readonly cloneTypeInput: string;
```

- *Type:* string

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.compartmentIdInput"></a>

```typescript
public readonly compartmentIdInput: string;
```

- *Type:* string

---

##### `computeCountInput`<sup>Optional</sup> <a name="computeCountInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.computeCountInput"></a>

```typescript
public readonly computeCountInput: number;
```

- *Type:* number

---

##### `computeModelInput`<sup>Optional</sup> <a name="computeModelInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.computeModelInput"></a>

```typescript
public readonly computeModelInput: string;
```

- *Type:* string

---

##### `cpuCoreCountInput`<sup>Optional</sup> <a name="cpuCoreCountInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.cpuCoreCountInput"></a>

```typescript
public readonly cpuCoreCountInput: number;
```

- *Type:* number

---

##### `customerContactsInput`<sup>Optional</sup> <a name="customerContactsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.customerContactsInput"></a>

```typescript
public readonly customerContactsInput: IResolvable | DatabaseAutonomousDatabaseCustomerContacts[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts">DatabaseAutonomousDatabaseCustomerContacts</a>[]

---

##### `databaseEditionInput`<sup>Optional</sup> <a name="databaseEditionInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.databaseEditionInput"></a>

```typescript
public readonly databaseEditionInput: string;
```

- *Type:* string

---

##### `databaseManagementStatusInput`<sup>Optional</sup> <a name="databaseManagementStatusInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.databaseManagementStatusInput"></a>

```typescript
public readonly databaseManagementStatusInput: string;
```

- *Type:* string

---

##### `dataSafeStatusInput`<sup>Optional</sup> <a name="dataSafeStatusInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataSafeStatusInput"></a>

```typescript
public readonly dataSafeStatusInput: string;
```

- *Type:* string

---

##### `dataStorageSizeInGbInput`<sup>Optional</sup> <a name="dataStorageSizeInGbInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataStorageSizeInGbInput"></a>

```typescript
public readonly dataStorageSizeInGbInput: number;
```

- *Type:* number

---

##### `dataStorageSizeInTbsInput`<sup>Optional</sup> <a name="dataStorageSizeInTbsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataStorageSizeInTbsInput"></a>

```typescript
public readonly dataStorageSizeInTbsInput: number;
```

- *Type:* number

---

##### `dbNameInput`<sup>Optional</sup> <a name="dbNameInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbNameInput"></a>

```typescript
public readonly dbNameInput: string;
```

- *Type:* string

---

##### `dbToolsDetailsInput`<sup>Optional</sup> <a name="dbToolsDetailsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbToolsDetailsInput"></a>

```typescript
public readonly dbToolsDetailsInput: IResolvable | DatabaseAutonomousDatabaseDbToolsDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails">DatabaseAutonomousDatabaseDbToolsDetails</a>[]

---

##### `dbVersionInput`<sup>Optional</sup> <a name="dbVersionInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbVersionInput"></a>

```typescript
public readonly dbVersionInput: string;
```

- *Type:* string

---

##### `dbWorkloadInput`<sup>Optional</sup> <a name="dbWorkloadInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbWorkloadInput"></a>

```typescript
public readonly dbWorkloadInput: string;
```

- *Type:* string

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.definedTagsInput"></a>

```typescript
public readonly definedTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `disasterRecoveryTypeInput`<sup>Optional</sup> <a name="disasterRecoveryTypeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.disasterRecoveryTypeInput"></a>

```typescript
public readonly disasterRecoveryTypeInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `encryptionKeyInput`<sup>Optional</sup> <a name="encryptionKeyInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.encryptionKeyInput"></a>

```typescript
public readonly encryptionKeyInput: DatabaseAutonomousDatabaseEncryptionKey;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey">DatabaseAutonomousDatabaseEncryptionKey</a>

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.freeformTagsInput"></a>

```typescript
public readonly freeformTagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inMemoryPercentageInput`<sup>Optional</sup> <a name="inMemoryPercentageInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.inMemoryPercentageInput"></a>

```typescript
public readonly inMemoryPercentageInput: number;
```

- *Type:* number

---

##### `isAccessControlEnabledInput`<sup>Optional</sup> <a name="isAccessControlEnabledInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isAccessControlEnabledInput"></a>

```typescript
public readonly isAccessControlEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isAutoScalingEnabledInput`<sup>Optional</sup> <a name="isAutoScalingEnabledInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isAutoScalingEnabledInput"></a>

```typescript
public readonly isAutoScalingEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isAutoScalingForStorageEnabledInput`<sup>Optional</sup> <a name="isAutoScalingForStorageEnabledInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isAutoScalingForStorageEnabledInput"></a>

```typescript
public readonly isAutoScalingForStorageEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isDataGuardEnabledInput`<sup>Optional</sup> <a name="isDataGuardEnabledInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isDataGuardEnabledInput"></a>

```typescript
public readonly isDataGuardEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isDedicatedInput`<sup>Optional</sup> <a name="isDedicatedInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isDedicatedInput"></a>

```typescript
public readonly isDedicatedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isDevTierInput`<sup>Optional</sup> <a name="isDevTierInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isDevTierInput"></a>

```typescript
public readonly isDevTierInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isFreeTierInput`<sup>Optional</sup> <a name="isFreeTierInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isFreeTierInput"></a>

```typescript
public readonly isFreeTierInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isLocalDataGuardEnabledInput`<sup>Optional</sup> <a name="isLocalDataGuardEnabledInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isLocalDataGuardEnabledInput"></a>

```typescript
public readonly isLocalDataGuardEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isMtlsConnectionRequiredInput`<sup>Optional</sup> <a name="isMtlsConnectionRequiredInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isMtlsConnectionRequiredInput"></a>

```typescript
public readonly isMtlsConnectionRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPreviewVersionWithServiceTermsAcceptedInput`<sup>Optional</sup> <a name="isPreviewVersionWithServiceTermsAcceptedInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isPreviewVersionWithServiceTermsAcceptedInput"></a>

```typescript
public readonly isPreviewVersionWithServiceTermsAcceptedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isRefreshableCloneInput`<sup>Optional</sup> <a name="isRefreshableCloneInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isRefreshableCloneInput"></a>

```typescript
public readonly isRefreshableCloneInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isReplicateAutomaticBackupsInput`<sup>Optional</sup> <a name="isReplicateAutomaticBackupsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isReplicateAutomaticBackupsInput"></a>

```typescript
public readonly isReplicateAutomaticBackupsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isShrinkOnlyInput`<sup>Optional</sup> <a name="isShrinkOnlyInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isShrinkOnlyInput"></a>

```typescript
public readonly isShrinkOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `licenseModelInput`<sup>Optional</sup> <a name="licenseModelInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.licenseModelInput"></a>

```typescript
public readonly licenseModelInput: string;
```

- *Type:* string

---

##### `localAdgAutoFailoverMaxDataLossLimitInput`<sup>Optional</sup> <a name="localAdgAutoFailoverMaxDataLossLimitInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimitInput"></a>

```typescript
public readonly localAdgAutoFailoverMaxDataLossLimitInput: number;
```

- *Type:* number

---

##### `longTermBackupScheduleInput`<sup>Optional</sup> <a name="longTermBackupScheduleInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.longTermBackupScheduleInput"></a>

```typescript
public readonly longTermBackupScheduleInput: IResolvable | DatabaseAutonomousDatabaseLongTermBackupSchedule[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule">DatabaseAutonomousDatabaseLongTermBackupSchedule</a>[]

---

##### `maxCpuCoreCountInput`<sup>Optional</sup> <a name="maxCpuCoreCountInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.maxCpuCoreCountInput"></a>

```typescript
public readonly maxCpuCoreCountInput: number;
```

- *Type:* number

---

##### `ncharacterSetInput`<sup>Optional</sup> <a name="ncharacterSetInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.ncharacterSetInput"></a>

```typescript
public readonly ncharacterSetInput: string;
```

- *Type:* string

---

##### `nsgIdsInput`<sup>Optional</sup> <a name="nsgIdsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.nsgIdsInput"></a>

```typescript
public readonly nsgIdsInput: string[];
```

- *Type:* string[]

---

##### `ocpuCountInput`<sup>Optional</sup> <a name="ocpuCountInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.ocpuCountInput"></a>

```typescript
public readonly ocpuCountInput: number;
```

- *Type:* number

---

##### `openModeInput`<sup>Optional</sup> <a name="openModeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.openModeInput"></a>

```typescript
public readonly openModeInput: string;
```

- *Type:* string

---

##### `operationsInsightsStatusInput`<sup>Optional</sup> <a name="operationsInsightsStatusInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.operationsInsightsStatusInput"></a>

```typescript
public readonly operationsInsightsStatusInput: string;
```

- *Type:* string

---

##### `permissionLevelInput`<sup>Optional</sup> <a name="permissionLevelInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.permissionLevelInput"></a>

```typescript
public readonly permissionLevelInput: string;
```

- *Type:* string

---

##### `privateEndpointIpInput`<sup>Optional</sup> <a name="privateEndpointIpInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.privateEndpointIpInput"></a>

```typescript
public readonly privateEndpointIpInput: string;
```

- *Type:* string

---

##### `privateEndpointLabelInput`<sup>Optional</sup> <a name="privateEndpointLabelInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.privateEndpointLabelInput"></a>

```typescript
public readonly privateEndpointLabelInput: string;
```

- *Type:* string

---

##### `refreshableModeInput`<sup>Optional</sup> <a name="refreshableModeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.refreshableModeInput"></a>

```typescript
public readonly refreshableModeInput: string;
```

- *Type:* string

---

##### `remoteDisasterRecoveryTypeInput`<sup>Optional</sup> <a name="remoteDisasterRecoveryTypeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.remoteDisasterRecoveryTypeInput"></a>

```typescript
public readonly remoteDisasterRecoveryTypeInput: string;
```

- *Type:* string

---

##### `resourcePoolLeaderIdInput`<sup>Optional</sup> <a name="resourcePoolLeaderIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.resourcePoolLeaderIdInput"></a>

```typescript
public readonly resourcePoolLeaderIdInput: string;
```

- *Type:* string

---

##### `resourcePoolSummaryInput`<sup>Optional</sup> <a name="resourcePoolSummaryInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.resourcePoolSummaryInput"></a>

```typescript
public readonly resourcePoolSummaryInput: DatabaseAutonomousDatabaseResourcePoolSummary;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary">DatabaseAutonomousDatabaseResourcePoolSummary</a>

---

##### `rotateKeyTriggerInput`<sup>Optional</sup> <a name="rotateKeyTriggerInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.rotateKeyTriggerInput"></a>

```typescript
public readonly rotateKeyTriggerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `scheduledOperationsInput`<sup>Optional</sup> <a name="scheduledOperationsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.scheduledOperationsInput"></a>

```typescript
public readonly scheduledOperationsInput: IResolvable | DatabaseAutonomousDatabaseScheduledOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations">DatabaseAutonomousDatabaseScheduledOperations</a>[]

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.secretIdInput"></a>

```typescript
public readonly secretIdInput: string;
```

- *Type:* string

---

##### `secretVersionNumberInput`<sup>Optional</sup> <a name="secretVersionNumberInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.secretVersionNumberInput"></a>

```typescript
public readonly secretVersionNumberInput: number;
```

- *Type:* number

---

##### `securityAttributesInput`<sup>Optional</sup> <a name="securityAttributesInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.securityAttributesInput"></a>

```typescript
public readonly securityAttributesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `shrinkAdbTriggerInput`<sup>Optional</sup> <a name="shrinkAdbTriggerInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.shrinkAdbTriggerInput"></a>

```typescript
public readonly shrinkAdbTriggerInput: number;
```

- *Type:* number

---

##### `sourceIdInput`<sup>Optional</sup> <a name="sourceIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.sourceIdInput"></a>

```typescript
public readonly sourceIdInput: string;
```

- *Type:* string

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.sourceInput"></a>

```typescript
public readonly sourceInput: string;
```

- *Type:* string

---

##### `standbyWhitelistedIpsInput`<sup>Optional</sup> <a name="standbyWhitelistedIpsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.standbyWhitelistedIpsInput"></a>

```typescript
public readonly standbyWhitelistedIpsInput: string[];
```

- *Type:* string[]

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.stateInput"></a>

```typescript
public readonly stateInput: string;
```

- *Type:* string

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `subscriptionIdInput`<sup>Optional</sup> <a name="subscriptionIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.subscriptionIdInput"></a>

```typescript
public readonly subscriptionIdInput: string;
```

- *Type:* string

---

##### `switchoverToInput`<sup>Optional</sup> <a name="switchoverToInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.switchoverToInput"></a>

```typescript
public readonly switchoverToInput: string;
```

- *Type:* string

---

##### `switchoverToRemotePeerIdInput`<sup>Optional</sup> <a name="switchoverToRemotePeerIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.switchoverToRemotePeerIdInput"></a>

```typescript
public readonly switchoverToRemotePeerIdInput: string;
```

- *Type:* string

---

##### `timeOfAutoRefreshStartInput`<sup>Optional</sup> <a name="timeOfAutoRefreshStartInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfAutoRefreshStartInput"></a>

```typescript
public readonly timeOfAutoRefreshStartInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DatabaseAutonomousDatabaseTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts">DatabaseAutonomousDatabaseTimeouts</a>

---

##### `timestampInput`<sup>Optional</sup> <a name="timestampInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timestampInput"></a>

```typescript
public readonly timestampInput: string;
```

- *Type:* string

---

##### `useLatestAvailableBackupTimeStampInput`<sup>Optional</sup> <a name="useLatestAvailableBackupTimeStampInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.useLatestAvailableBackupTimeStampInput"></a>

```typescript
public readonly useLatestAvailableBackupTimeStampInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vaultIdInput`<sup>Optional</sup> <a name="vaultIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.vaultIdInput"></a>

```typescript
public readonly vaultIdInput: string;
```

- *Type:* string

---

##### `whitelistedIpsInput`<sup>Optional</sup> <a name="whitelistedIpsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.whitelistedIpsInput"></a>

```typescript
public readonly whitelistedIpsInput: string[];
```

- *Type:* string[]

---

##### `adminPassword`<sup>Required</sup> <a name="adminPassword" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.adminPassword"></a>

```typescript
public readonly adminPassword: string;
```

- *Type:* string

---

##### `arePrimaryWhitelistedIpsUsed`<sup>Required</sup> <a name="arePrimaryWhitelistedIpsUsed" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.arePrimaryWhitelistedIpsUsed"></a>

```typescript
public readonly arePrimaryWhitelistedIpsUsed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autonomousContainerDatabaseId`<sup>Required</sup> <a name="autonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousContainerDatabaseId"></a>

```typescript
public readonly autonomousContainerDatabaseId: string;
```

- *Type:* string

---

##### `autonomousDatabaseBackupId`<sup>Required</sup> <a name="autonomousDatabaseBackupId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousDatabaseBackupId"></a>

```typescript
public readonly autonomousDatabaseBackupId: string;
```

- *Type:* string

---

##### `autonomousDatabaseId`<sup>Required</sup> <a name="autonomousDatabaseId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousDatabaseId"></a>

```typescript
public readonly autonomousDatabaseId: string;
```

- *Type:* string

---

##### `autonomousMaintenanceScheduleType`<sup>Required</sup> <a name="autonomousMaintenanceScheduleType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autonomousMaintenanceScheduleType"></a>

```typescript
public readonly autonomousMaintenanceScheduleType: string;
```

- *Type:* string

---

##### `autoRefreshFrequencyInSeconds`<sup>Required</sup> <a name="autoRefreshFrequencyInSeconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autoRefreshFrequencyInSeconds"></a>

```typescript
public readonly autoRefreshFrequencyInSeconds: number;
```

- *Type:* number

---

##### `autoRefreshPointLagInSeconds`<sup>Required</sup> <a name="autoRefreshPointLagInSeconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.autoRefreshPointLagInSeconds"></a>

```typescript
public readonly autoRefreshPointLagInSeconds: number;
```

- *Type:* number

---

##### `backupRetentionPeriodInDays`<sup>Required</sup> <a name="backupRetentionPeriodInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.backupRetentionPeriodInDays"></a>

```typescript
public readonly backupRetentionPeriodInDays: number;
```

- *Type:* number

---

##### `byolComputeCountLimit`<sup>Required</sup> <a name="byolComputeCountLimit" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.byolComputeCountLimit"></a>

```typescript
public readonly byolComputeCountLimit: number;
```

- *Type:* number

---

##### `characterSet`<sup>Required</sup> <a name="characterSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.characterSet"></a>

```typescript
public readonly characterSet: string;
```

- *Type:* string

---

##### `cloneType`<sup>Required</sup> <a name="cloneType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.cloneType"></a>

```typescript
public readonly cloneType: string;
```

- *Type:* string

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.computeCount"></a>

```typescript
public readonly computeCount: number;
```

- *Type:* number

---

##### `computeModel`<sup>Required</sup> <a name="computeModel" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.computeModel"></a>

```typescript
public readonly computeModel: string;
```

- *Type:* string

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.cpuCoreCount"></a>

```typescript
public readonly cpuCoreCount: number;
```

- *Type:* number

---

##### `databaseEdition`<sup>Required</sup> <a name="databaseEdition" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.databaseEdition"></a>

```typescript
public readonly databaseEdition: string;
```

- *Type:* string

---

##### `databaseManagementStatus`<sup>Required</sup> <a name="databaseManagementStatus" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.databaseManagementStatus"></a>

```typescript
public readonly databaseManagementStatus: string;
```

- *Type:* string

---

##### `dataSafeStatus`<sup>Required</sup> <a name="dataSafeStatus" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataSafeStatus"></a>

```typescript
public readonly dataSafeStatus: string;
```

- *Type:* string

---

##### `dataStorageSizeInGb`<sup>Required</sup> <a name="dataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataStorageSizeInGb"></a>

```typescript
public readonly dataStorageSizeInGb: number;
```

- *Type:* number

---

##### `dataStorageSizeInTbs`<sup>Required</sup> <a name="dataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dataStorageSizeInTbs"></a>

```typescript
public readonly dataStorageSizeInTbs: number;
```

- *Type:* number

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbName"></a>

```typescript
public readonly dbName: string;
```

- *Type:* string

---

##### `dbVersion`<sup>Required</sup> <a name="dbVersion" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbVersion"></a>

```typescript
public readonly dbVersion: string;
```

- *Type:* string

---

##### `dbWorkload`<sup>Required</sup> <a name="dbWorkload" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.dbWorkload"></a>

```typescript
public readonly dbWorkload: string;
```

- *Type:* string

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `disasterRecoveryType`<sup>Required</sup> <a name="disasterRecoveryType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.disasterRecoveryType"></a>

```typescript
public readonly disasterRecoveryType: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inMemoryPercentage`<sup>Required</sup> <a name="inMemoryPercentage" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.inMemoryPercentage"></a>

```typescript
public readonly inMemoryPercentage: number;
```

- *Type:* number

---

##### `isAccessControlEnabled`<sup>Required</sup> <a name="isAccessControlEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isAccessControlEnabled"></a>

```typescript
public readonly isAccessControlEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isAutoScalingEnabled`<sup>Required</sup> <a name="isAutoScalingEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isAutoScalingEnabled"></a>

```typescript
public readonly isAutoScalingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isAutoScalingForStorageEnabled`<sup>Required</sup> <a name="isAutoScalingForStorageEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isAutoScalingForStorageEnabled"></a>

```typescript
public readonly isAutoScalingForStorageEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isDataGuardEnabled`<sup>Required</sup> <a name="isDataGuardEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isDataGuardEnabled"></a>

```typescript
public readonly isDataGuardEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isDedicated`<sup>Required</sup> <a name="isDedicated" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isDedicated"></a>

```typescript
public readonly isDedicated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isDevTier`<sup>Required</sup> <a name="isDevTier" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isDevTier"></a>

```typescript
public readonly isDevTier: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isFreeTier`<sup>Required</sup> <a name="isFreeTier" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isFreeTier"></a>

```typescript
public readonly isFreeTier: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isLocalDataGuardEnabled`<sup>Required</sup> <a name="isLocalDataGuardEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isLocalDataGuardEnabled"></a>

```typescript
public readonly isLocalDataGuardEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isMtlsConnectionRequired`<sup>Required</sup> <a name="isMtlsConnectionRequired" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isMtlsConnectionRequired"></a>

```typescript
public readonly isMtlsConnectionRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isPreviewVersionWithServiceTermsAccepted`<sup>Required</sup> <a name="isPreviewVersionWithServiceTermsAccepted" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isPreviewVersionWithServiceTermsAccepted"></a>

```typescript
public readonly isPreviewVersionWithServiceTermsAccepted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isRefreshableClone`<sup>Required</sup> <a name="isRefreshableClone" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isRefreshableClone"></a>

```typescript
public readonly isRefreshableClone: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isReplicateAutomaticBackups`<sup>Required</sup> <a name="isReplicateAutomaticBackups" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isReplicateAutomaticBackups"></a>

```typescript
public readonly isReplicateAutomaticBackups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `isShrinkOnly`<sup>Required</sup> <a name="isShrinkOnly" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.isShrinkOnly"></a>

```typescript
public readonly isShrinkOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

---

##### `localAdgAutoFailoverMaxDataLossLimit`<sup>Required</sup> <a name="localAdgAutoFailoverMaxDataLossLimit" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.localAdgAutoFailoverMaxDataLossLimit"></a>

```typescript
public readonly localAdgAutoFailoverMaxDataLossLimit: number;
```

- *Type:* number

---

##### `maxCpuCoreCount`<sup>Required</sup> <a name="maxCpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.maxCpuCoreCount"></a>

```typescript
public readonly maxCpuCoreCount: number;
```

- *Type:* number

---

##### `ncharacterSet`<sup>Required</sup> <a name="ncharacterSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.ncharacterSet"></a>

```typescript
public readonly ncharacterSet: string;
```

- *Type:* string

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

---

##### `ocpuCount`<sup>Required</sup> <a name="ocpuCount" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.ocpuCount"></a>

```typescript
public readonly ocpuCount: number;
```

- *Type:* number

---

##### `openMode`<sup>Required</sup> <a name="openMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.openMode"></a>

```typescript
public readonly openMode: string;
```

- *Type:* string

---

##### `operationsInsightsStatus`<sup>Required</sup> <a name="operationsInsightsStatus" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.operationsInsightsStatus"></a>

```typescript
public readonly operationsInsightsStatus: string;
```

- *Type:* string

---

##### `permissionLevel`<sup>Required</sup> <a name="permissionLevel" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.permissionLevel"></a>

```typescript
public readonly permissionLevel: string;
```

- *Type:* string

---

##### `privateEndpointIp`<sup>Required</sup> <a name="privateEndpointIp" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.privateEndpointIp"></a>

```typescript
public readonly privateEndpointIp: string;
```

- *Type:* string

---

##### `privateEndpointLabel`<sup>Required</sup> <a name="privateEndpointLabel" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.privateEndpointLabel"></a>

```typescript
public readonly privateEndpointLabel: string;
```

- *Type:* string

---

##### `refreshableMode`<sup>Required</sup> <a name="refreshableMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.refreshableMode"></a>

```typescript
public readonly refreshableMode: string;
```

- *Type:* string

---

##### `remoteDisasterRecoveryType`<sup>Required</sup> <a name="remoteDisasterRecoveryType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.remoteDisasterRecoveryType"></a>

```typescript
public readonly remoteDisasterRecoveryType: string;
```

- *Type:* string

---

##### `resourcePoolLeaderId`<sup>Required</sup> <a name="resourcePoolLeaderId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.resourcePoolLeaderId"></a>

```typescript
public readonly resourcePoolLeaderId: string;
```

- *Type:* string

---

##### `rotateKeyTrigger`<sup>Required</sup> <a name="rotateKeyTrigger" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.rotateKeyTrigger"></a>

```typescript
public readonly rotateKeyTrigger: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `secretVersionNumber`<sup>Required</sup> <a name="secretVersionNumber" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.secretVersionNumber"></a>

```typescript
public readonly secretVersionNumber: number;
```

- *Type:* number

---

##### `securityAttributes`<sup>Required</sup> <a name="securityAttributes" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.securityAttributes"></a>

```typescript
public readonly securityAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `shrinkAdbTrigger`<sup>Required</sup> <a name="shrinkAdbTrigger" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.shrinkAdbTrigger"></a>

```typescript
public readonly shrinkAdbTrigger: number;
```

- *Type:* number

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.sourceId"></a>

```typescript
public readonly sourceId: string;
```

- *Type:* string

---

##### `standbyWhitelistedIps`<sup>Required</sup> <a name="standbyWhitelistedIps" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.standbyWhitelistedIps"></a>

```typescript
public readonly standbyWhitelistedIps: string[];
```

- *Type:* string[]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `subscriptionId`<sup>Required</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

---

##### `switchoverTo`<sup>Required</sup> <a name="switchoverTo" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.switchoverTo"></a>

```typescript
public readonly switchoverTo: string;
```

- *Type:* string

---

##### `switchoverToRemotePeerId`<sup>Required</sup> <a name="switchoverToRemotePeerId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.switchoverToRemotePeerId"></a>

```typescript
public readonly switchoverToRemotePeerId: string;
```

- *Type:* string

---

##### `timeOfAutoRefreshStart`<sup>Required</sup> <a name="timeOfAutoRefreshStart" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timeOfAutoRefreshStart"></a>

```typescript
public readonly timeOfAutoRefreshStart: string;
```

- *Type:* string

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.timestamp"></a>

```typescript
public readonly timestamp: string;
```

- *Type:* string

---

##### `useLatestAvailableBackupTimeStamp`<sup>Required</sup> <a name="useLatestAvailableBackupTimeStamp" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.useLatestAvailableBackupTimeStamp"></a>

```typescript
public readonly useLatestAvailableBackupTimeStamp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

---

##### `whitelistedIps`<sup>Required</sup> <a name="whitelistedIps" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.whitelistedIps"></a>

```typescript
public readonly whitelistedIps: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabase.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseAutonomousDatabaseApexDetails <a name="DatabaseAutonomousDatabaseApexDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetails.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousDatabaseApexDetails: databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetails = { ... }
```


### DatabaseAutonomousDatabaseBackupConfig <a name="DatabaseAutonomousDatabaseBackupConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfig.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousDatabaseBackupConfig: databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfig = { ... }
```


### DatabaseAutonomousDatabaseConfig <a name="DatabaseAutonomousDatabaseConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousDatabaseConfig: databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.compartmentId">compartmentId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#compartment_id DatabaseAutonomousDatabase#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dbName">dbName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#db_name DatabaseAutonomousDatabase#db_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.adminPassword">adminPassword</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#admin_password DatabaseAutonomousDatabase#admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.arePrimaryWhitelistedIpsUsed">arePrimaryWhitelistedIpsUsed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#are_primary_whitelisted_ips_used DatabaseAutonomousDatabase#are_primary_whitelisted_ips_used}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.autonomousContainerDatabaseId">autonomousContainerDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_container_database_id DatabaseAutonomousDatabase#autonomous_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.autonomousDatabaseBackupId">autonomousDatabaseBackupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_database_backup_id DatabaseAutonomousDatabase#autonomous_database_backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.autonomousDatabaseId">autonomousDatabaseId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_database_id DatabaseAutonomousDatabase#autonomous_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.autonomousMaintenanceScheduleType">autonomousMaintenanceScheduleType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_maintenance_schedule_type DatabaseAutonomousDatabase#autonomous_maintenance_schedule_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.autoRefreshFrequencyInSeconds">autoRefreshFrequencyInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#auto_refresh_frequency_in_seconds DatabaseAutonomousDatabase#auto_refresh_frequency_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.autoRefreshPointLagInSeconds">autoRefreshPointLagInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#auto_refresh_point_lag_in_seconds DatabaseAutonomousDatabase#auto_refresh_point_lag_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.backupRetentionPeriodInDays">backupRetentionPeriodInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#backup_retention_period_in_days DatabaseAutonomousDatabase#backup_retention_period_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.byolComputeCountLimit">byolComputeCountLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#byol_compute_count_limit DatabaseAutonomousDatabase#byol_compute_count_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.characterSet">characterSet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#character_set DatabaseAutonomousDatabase#character_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.cloneType">cloneType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#clone_type DatabaseAutonomousDatabase#clone_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.computeCount">computeCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#compute_count DatabaseAutonomousDatabase#compute_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.computeModel">computeModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#compute_model DatabaseAutonomousDatabase#compute_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.cpuCoreCount">cpuCoreCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#cpu_core_count DatabaseAutonomousDatabase#cpu_core_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.customerContacts">customerContacts</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts">DatabaseAutonomousDatabaseCustomerContacts</a>[]</code> | customer_contacts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.databaseEdition">databaseEdition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#database_edition DatabaseAutonomousDatabase#database_edition}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.databaseManagementStatus">databaseManagementStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#database_management_status DatabaseAutonomousDatabase#database_management_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dataSafeStatus">dataSafeStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#data_safe_status DatabaseAutonomousDatabase#data_safe_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dataStorageSizeInGb">dataStorageSizeInGb</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#data_storage_size_in_gb DatabaseAutonomousDatabase#data_storage_size_in_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dataStorageSizeInTbs">dataStorageSizeInTbs</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#data_storage_size_in_tbs DatabaseAutonomousDatabase#data_storage_size_in_tbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dbToolsDetails">dbToolsDetails</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails">DatabaseAutonomousDatabaseDbToolsDetails</a>[]</code> | db_tools_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dbVersion">dbVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#db_version DatabaseAutonomousDatabase#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dbWorkload">dbWorkload</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#db_workload DatabaseAutonomousDatabase#db_workload}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.definedTags">definedTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#defined_tags DatabaseAutonomousDatabase#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.disasterRecoveryType">disasterRecoveryType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#disaster_recovery_type DatabaseAutonomousDatabase#disaster_recovery_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.displayName">displayName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#display_name DatabaseAutonomousDatabase#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.encryptionKey">encryptionKey</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey">DatabaseAutonomousDatabaseEncryptionKey</a></code> | encryption_key block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.freeformTags">freeformTags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#freeform_tags DatabaseAutonomousDatabase#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#id DatabaseAutonomousDatabase#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.inMemoryPercentage">inMemoryPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#in_memory_percentage DatabaseAutonomousDatabase#in_memory_percentage}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isAccessControlEnabled">isAccessControlEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_access_control_enabled DatabaseAutonomousDatabase#is_access_control_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isAutoScalingEnabled">isAutoScalingEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_auto_scaling_enabled DatabaseAutonomousDatabase#is_auto_scaling_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isAutoScalingForStorageEnabled">isAutoScalingForStorageEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_auto_scaling_for_storage_enabled DatabaseAutonomousDatabase#is_auto_scaling_for_storage_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isDataGuardEnabled">isDataGuardEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_data_guard_enabled DatabaseAutonomousDatabase#is_data_guard_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isDedicated">isDedicated</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_dedicated DatabaseAutonomousDatabase#is_dedicated}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isDevTier">isDevTier</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_dev_tier DatabaseAutonomousDatabase#is_dev_tier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isFreeTier">isFreeTier</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_free_tier DatabaseAutonomousDatabase#is_free_tier}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isLocalDataGuardEnabled">isLocalDataGuardEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_local_data_guard_enabled DatabaseAutonomousDatabase#is_local_data_guard_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isMtlsConnectionRequired">isMtlsConnectionRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_mtls_connection_required DatabaseAutonomousDatabase#is_mtls_connection_required}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isPreviewVersionWithServiceTermsAccepted">isPreviewVersionWithServiceTermsAccepted</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_preview_version_with_service_terms_accepted DatabaseAutonomousDatabase#is_preview_version_with_service_terms_accepted}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isRefreshableClone">isRefreshableClone</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_refreshable_clone DatabaseAutonomousDatabase#is_refreshable_clone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isReplicateAutomaticBackups">isReplicateAutomaticBackups</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_replicate_automatic_backups DatabaseAutonomousDatabase#is_replicate_automatic_backups}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isShrinkOnly">isShrinkOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_shrink_only DatabaseAutonomousDatabase#is_shrink_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#kms_key_id DatabaseAutonomousDatabase#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.licenseModel">licenseModel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#license_model DatabaseAutonomousDatabase#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.localAdgAutoFailoverMaxDataLossLimit">localAdgAutoFailoverMaxDataLossLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#local_adg_auto_failover_max_data_loss_limit DatabaseAutonomousDatabase#local_adg_auto_failover_max_data_loss_limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.longTermBackupSchedule">longTermBackupSchedule</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule">DatabaseAutonomousDatabaseLongTermBackupSchedule</a>[]</code> | long_term_backup_schedule block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.maxCpuCoreCount">maxCpuCoreCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#max_cpu_core_count DatabaseAutonomousDatabase#max_cpu_core_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.ncharacterSet">ncharacterSet</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#ncharacter_set DatabaseAutonomousDatabase#ncharacter_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.nsgIds">nsgIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#nsg_ids DatabaseAutonomousDatabase#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.ocpuCount">ocpuCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#ocpu_count DatabaseAutonomousDatabase#ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.openMode">openMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#open_mode DatabaseAutonomousDatabase#open_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.operationsInsightsStatus">operationsInsightsStatus</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#operations_insights_status DatabaseAutonomousDatabase#operations_insights_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.permissionLevel">permissionLevel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#permission_level DatabaseAutonomousDatabase#permission_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.privateEndpointIp">privateEndpointIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#private_endpoint_ip DatabaseAutonomousDatabase#private_endpoint_ip}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.privateEndpointLabel">privateEndpointLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#private_endpoint_label DatabaseAutonomousDatabase#private_endpoint_label}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.refreshableMode">refreshableMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#refreshable_mode DatabaseAutonomousDatabase#refreshable_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.remoteDisasterRecoveryType">remoteDisasterRecoveryType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#remote_disaster_recovery_type DatabaseAutonomousDatabase#remote_disaster_recovery_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.resourcePoolLeaderId">resourcePoolLeaderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#resource_pool_leader_id DatabaseAutonomousDatabase#resource_pool_leader_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.resourcePoolSummary">resourcePoolSummary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary">DatabaseAutonomousDatabaseResourcePoolSummary</a></code> | resource_pool_summary block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.rotateKeyTrigger">rotateKeyTrigger</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#rotate_key_trigger DatabaseAutonomousDatabase#rotate_key_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.scheduledOperations">scheduledOperations</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations">DatabaseAutonomousDatabaseScheduledOperations</a>[]</code> | scheduled_operations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.secretId">secretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#secret_id DatabaseAutonomousDatabase#secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.secretVersionNumber">secretVersionNumber</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#secret_version_number DatabaseAutonomousDatabase#secret_version_number}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.securityAttributes">securityAttributes</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#security_attributes DatabaseAutonomousDatabase#security_attributes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.shrinkAdbTrigger">shrinkAdbTrigger</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#shrink_adb_trigger DatabaseAutonomousDatabase#shrink_adb_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.source">source</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#source DatabaseAutonomousDatabase#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.sourceId">sourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#source_id DatabaseAutonomousDatabase#source_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.standbyWhitelistedIps">standbyWhitelistedIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#standby_whitelisted_ips DatabaseAutonomousDatabase#standby_whitelisted_ips}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.state">state</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#state DatabaseAutonomousDatabase#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#subnet_id DatabaseAutonomousDatabase#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.subscriptionId">subscriptionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#subscription_id DatabaseAutonomousDatabase#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.switchoverTo">switchoverTo</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#switchover_to DatabaseAutonomousDatabase#switchover_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.switchoverToRemotePeerId">switchoverToRemotePeerId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#switchover_to_remote_peer_id DatabaseAutonomousDatabase#switchover_to_remote_peer_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.timeOfAutoRefreshStart">timeOfAutoRefreshStart</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#time_of_auto_refresh_start DatabaseAutonomousDatabase#time_of_auto_refresh_start}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts">DatabaseAutonomousDatabaseTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.timestamp">timestamp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#timestamp DatabaseAutonomousDatabase#timestamp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.useLatestAvailableBackupTimeStamp">useLatestAvailableBackupTimeStamp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#use_latest_available_backup_time_stamp DatabaseAutonomousDatabase#use_latest_available_backup_time_stamp}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.vaultId">vaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#vault_id DatabaseAutonomousDatabase#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.whitelistedIps">whitelistedIps</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#whitelisted_ips DatabaseAutonomousDatabase#whitelisted_ips}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.compartmentId"></a>

```typescript
public readonly compartmentId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#compartment_id DatabaseAutonomousDatabase#compartment_id}.

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dbName"></a>

```typescript
public readonly dbName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#db_name DatabaseAutonomousDatabase#db_name}.

---

##### `adminPassword`<sup>Optional</sup> <a name="adminPassword" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.adminPassword"></a>

```typescript
public readonly adminPassword: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#admin_password DatabaseAutonomousDatabase#admin_password}.

---

##### `arePrimaryWhitelistedIpsUsed`<sup>Optional</sup> <a name="arePrimaryWhitelistedIpsUsed" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.arePrimaryWhitelistedIpsUsed"></a>

```typescript
public readonly arePrimaryWhitelistedIpsUsed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#are_primary_whitelisted_ips_used DatabaseAutonomousDatabase#are_primary_whitelisted_ips_used}.

---

##### `autonomousContainerDatabaseId`<sup>Optional</sup> <a name="autonomousContainerDatabaseId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.autonomousContainerDatabaseId"></a>

```typescript
public readonly autonomousContainerDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_container_database_id DatabaseAutonomousDatabase#autonomous_container_database_id}.

---

##### `autonomousDatabaseBackupId`<sup>Optional</sup> <a name="autonomousDatabaseBackupId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.autonomousDatabaseBackupId"></a>

```typescript
public readonly autonomousDatabaseBackupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_database_backup_id DatabaseAutonomousDatabase#autonomous_database_backup_id}.

---

##### `autonomousDatabaseId`<sup>Optional</sup> <a name="autonomousDatabaseId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.autonomousDatabaseId"></a>

```typescript
public readonly autonomousDatabaseId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_database_id DatabaseAutonomousDatabase#autonomous_database_id}.

---

##### `autonomousMaintenanceScheduleType`<sup>Optional</sup> <a name="autonomousMaintenanceScheduleType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.autonomousMaintenanceScheduleType"></a>

```typescript
public readonly autonomousMaintenanceScheduleType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_maintenance_schedule_type DatabaseAutonomousDatabase#autonomous_maintenance_schedule_type}.

---

##### `autoRefreshFrequencyInSeconds`<sup>Optional</sup> <a name="autoRefreshFrequencyInSeconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.autoRefreshFrequencyInSeconds"></a>

```typescript
public readonly autoRefreshFrequencyInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#auto_refresh_frequency_in_seconds DatabaseAutonomousDatabase#auto_refresh_frequency_in_seconds}.

---

##### `autoRefreshPointLagInSeconds`<sup>Optional</sup> <a name="autoRefreshPointLagInSeconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.autoRefreshPointLagInSeconds"></a>

```typescript
public readonly autoRefreshPointLagInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#auto_refresh_point_lag_in_seconds DatabaseAutonomousDatabase#auto_refresh_point_lag_in_seconds}.

---

##### `backupRetentionPeriodInDays`<sup>Optional</sup> <a name="backupRetentionPeriodInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.backupRetentionPeriodInDays"></a>

```typescript
public readonly backupRetentionPeriodInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#backup_retention_period_in_days DatabaseAutonomousDatabase#backup_retention_period_in_days}.

---

##### `byolComputeCountLimit`<sup>Optional</sup> <a name="byolComputeCountLimit" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.byolComputeCountLimit"></a>

```typescript
public readonly byolComputeCountLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#byol_compute_count_limit DatabaseAutonomousDatabase#byol_compute_count_limit}.

---

##### `characterSet`<sup>Optional</sup> <a name="characterSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.characterSet"></a>

```typescript
public readonly characterSet: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#character_set DatabaseAutonomousDatabase#character_set}.

---

##### `cloneType`<sup>Optional</sup> <a name="cloneType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.cloneType"></a>

```typescript
public readonly cloneType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#clone_type DatabaseAutonomousDatabase#clone_type}.

---

##### `computeCount`<sup>Optional</sup> <a name="computeCount" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.computeCount"></a>

```typescript
public readonly computeCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#compute_count DatabaseAutonomousDatabase#compute_count}.

---

##### `computeModel`<sup>Optional</sup> <a name="computeModel" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.computeModel"></a>

```typescript
public readonly computeModel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#compute_model DatabaseAutonomousDatabase#compute_model}.

---

##### `cpuCoreCount`<sup>Optional</sup> <a name="cpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.cpuCoreCount"></a>

```typescript
public readonly cpuCoreCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#cpu_core_count DatabaseAutonomousDatabase#cpu_core_count}.

---

##### `customerContacts`<sup>Optional</sup> <a name="customerContacts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.customerContacts"></a>

```typescript
public readonly customerContacts: IResolvable | DatabaseAutonomousDatabaseCustomerContacts[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts">DatabaseAutonomousDatabaseCustomerContacts</a>[]

customer_contacts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#customer_contacts DatabaseAutonomousDatabase#customer_contacts}

---

##### `databaseEdition`<sup>Optional</sup> <a name="databaseEdition" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.databaseEdition"></a>

```typescript
public readonly databaseEdition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#database_edition DatabaseAutonomousDatabase#database_edition}.

---

##### `databaseManagementStatus`<sup>Optional</sup> <a name="databaseManagementStatus" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.databaseManagementStatus"></a>

```typescript
public readonly databaseManagementStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#database_management_status DatabaseAutonomousDatabase#database_management_status}.

---

##### `dataSafeStatus`<sup>Optional</sup> <a name="dataSafeStatus" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dataSafeStatus"></a>

```typescript
public readonly dataSafeStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#data_safe_status DatabaseAutonomousDatabase#data_safe_status}.

---

##### `dataStorageSizeInGb`<sup>Optional</sup> <a name="dataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dataStorageSizeInGb"></a>

```typescript
public readonly dataStorageSizeInGb: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#data_storage_size_in_gb DatabaseAutonomousDatabase#data_storage_size_in_gb}.

---

##### `dataStorageSizeInTbs`<sup>Optional</sup> <a name="dataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dataStorageSizeInTbs"></a>

```typescript
public readonly dataStorageSizeInTbs: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#data_storage_size_in_tbs DatabaseAutonomousDatabase#data_storage_size_in_tbs}.

---

##### `dbToolsDetails`<sup>Optional</sup> <a name="dbToolsDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dbToolsDetails"></a>

```typescript
public readonly dbToolsDetails: IResolvable | DatabaseAutonomousDatabaseDbToolsDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails">DatabaseAutonomousDatabaseDbToolsDetails</a>[]

db_tools_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#db_tools_details DatabaseAutonomousDatabase#db_tools_details}

---

##### `dbVersion`<sup>Optional</sup> <a name="dbVersion" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dbVersion"></a>

```typescript
public readonly dbVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#db_version DatabaseAutonomousDatabase#db_version}.

---

##### `dbWorkload`<sup>Optional</sup> <a name="dbWorkload" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.dbWorkload"></a>

```typescript
public readonly dbWorkload: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#db_workload DatabaseAutonomousDatabase#db_workload}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.definedTags"></a>

```typescript
public readonly definedTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#defined_tags DatabaseAutonomousDatabase#defined_tags}.

---

##### `disasterRecoveryType`<sup>Optional</sup> <a name="disasterRecoveryType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.disasterRecoveryType"></a>

```typescript
public readonly disasterRecoveryType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#disaster_recovery_type DatabaseAutonomousDatabase#disaster_recovery_type}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#display_name DatabaseAutonomousDatabase#display_name}.

---

##### `encryptionKey`<sup>Optional</sup> <a name="encryptionKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: DatabaseAutonomousDatabaseEncryptionKey;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey">DatabaseAutonomousDatabaseEncryptionKey</a>

encryption_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#encryption_key DatabaseAutonomousDatabase#encryption_key}

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.freeformTags"></a>

```typescript
public readonly freeformTags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#freeform_tags DatabaseAutonomousDatabase#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#id DatabaseAutonomousDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inMemoryPercentage`<sup>Optional</sup> <a name="inMemoryPercentage" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.inMemoryPercentage"></a>

```typescript
public readonly inMemoryPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#in_memory_percentage DatabaseAutonomousDatabase#in_memory_percentage}.

---

##### `isAccessControlEnabled`<sup>Optional</sup> <a name="isAccessControlEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isAccessControlEnabled"></a>

```typescript
public readonly isAccessControlEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_access_control_enabled DatabaseAutonomousDatabase#is_access_control_enabled}.

---

##### `isAutoScalingEnabled`<sup>Optional</sup> <a name="isAutoScalingEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isAutoScalingEnabled"></a>

```typescript
public readonly isAutoScalingEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_auto_scaling_enabled DatabaseAutonomousDatabase#is_auto_scaling_enabled}.

---

##### `isAutoScalingForStorageEnabled`<sup>Optional</sup> <a name="isAutoScalingForStorageEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isAutoScalingForStorageEnabled"></a>

```typescript
public readonly isAutoScalingForStorageEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_auto_scaling_for_storage_enabled DatabaseAutonomousDatabase#is_auto_scaling_for_storage_enabled}.

---

##### `isDataGuardEnabled`<sup>Optional</sup> <a name="isDataGuardEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isDataGuardEnabled"></a>

```typescript
public readonly isDataGuardEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_data_guard_enabled DatabaseAutonomousDatabase#is_data_guard_enabled}.

---

##### `isDedicated`<sup>Optional</sup> <a name="isDedicated" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isDedicated"></a>

```typescript
public readonly isDedicated: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_dedicated DatabaseAutonomousDatabase#is_dedicated}.

---

##### `isDevTier`<sup>Optional</sup> <a name="isDevTier" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isDevTier"></a>

```typescript
public readonly isDevTier: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_dev_tier DatabaseAutonomousDatabase#is_dev_tier}.

---

##### `isFreeTier`<sup>Optional</sup> <a name="isFreeTier" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isFreeTier"></a>

```typescript
public readonly isFreeTier: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_free_tier DatabaseAutonomousDatabase#is_free_tier}.

---

##### `isLocalDataGuardEnabled`<sup>Optional</sup> <a name="isLocalDataGuardEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isLocalDataGuardEnabled"></a>

```typescript
public readonly isLocalDataGuardEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_local_data_guard_enabled DatabaseAutonomousDatabase#is_local_data_guard_enabled}.

---

##### `isMtlsConnectionRequired`<sup>Optional</sup> <a name="isMtlsConnectionRequired" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isMtlsConnectionRequired"></a>

```typescript
public readonly isMtlsConnectionRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_mtls_connection_required DatabaseAutonomousDatabase#is_mtls_connection_required}.

---

##### `isPreviewVersionWithServiceTermsAccepted`<sup>Optional</sup> <a name="isPreviewVersionWithServiceTermsAccepted" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isPreviewVersionWithServiceTermsAccepted"></a>

```typescript
public readonly isPreviewVersionWithServiceTermsAccepted: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_preview_version_with_service_terms_accepted DatabaseAutonomousDatabase#is_preview_version_with_service_terms_accepted}.

---

##### `isRefreshableClone`<sup>Optional</sup> <a name="isRefreshableClone" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isRefreshableClone"></a>

```typescript
public readonly isRefreshableClone: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_refreshable_clone DatabaseAutonomousDatabase#is_refreshable_clone}.

---

##### `isReplicateAutomaticBackups`<sup>Optional</sup> <a name="isReplicateAutomaticBackups" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isReplicateAutomaticBackups"></a>

```typescript
public readonly isReplicateAutomaticBackups: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_replicate_automatic_backups DatabaseAutonomousDatabase#is_replicate_automatic_backups}.

---

##### `isShrinkOnly`<sup>Optional</sup> <a name="isShrinkOnly" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.isShrinkOnly"></a>

```typescript
public readonly isShrinkOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_shrink_only DatabaseAutonomousDatabase#is_shrink_only}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#kms_key_id DatabaseAutonomousDatabase#kms_key_id}.

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.licenseModel"></a>

```typescript
public readonly licenseModel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#license_model DatabaseAutonomousDatabase#license_model}.

---

##### `localAdgAutoFailoverMaxDataLossLimit`<sup>Optional</sup> <a name="localAdgAutoFailoverMaxDataLossLimit" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.localAdgAutoFailoverMaxDataLossLimit"></a>

```typescript
public readonly localAdgAutoFailoverMaxDataLossLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#local_adg_auto_failover_max_data_loss_limit DatabaseAutonomousDatabase#local_adg_auto_failover_max_data_loss_limit}.

---

##### `longTermBackupSchedule`<sup>Optional</sup> <a name="longTermBackupSchedule" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.longTermBackupSchedule"></a>

```typescript
public readonly longTermBackupSchedule: IResolvable | DatabaseAutonomousDatabaseLongTermBackupSchedule[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule">DatabaseAutonomousDatabaseLongTermBackupSchedule</a>[]

long_term_backup_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#long_term_backup_schedule DatabaseAutonomousDatabase#long_term_backup_schedule}

---

##### `maxCpuCoreCount`<sup>Optional</sup> <a name="maxCpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.maxCpuCoreCount"></a>

```typescript
public readonly maxCpuCoreCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#max_cpu_core_count DatabaseAutonomousDatabase#max_cpu_core_count}.

---

##### `ncharacterSet`<sup>Optional</sup> <a name="ncharacterSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.ncharacterSet"></a>

```typescript
public readonly ncharacterSet: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#ncharacter_set DatabaseAutonomousDatabase#ncharacter_set}.

---

##### `nsgIds`<sup>Optional</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.nsgIds"></a>

```typescript
public readonly nsgIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#nsg_ids DatabaseAutonomousDatabase#nsg_ids}.

---

##### `ocpuCount`<sup>Optional</sup> <a name="ocpuCount" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.ocpuCount"></a>

```typescript
public readonly ocpuCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#ocpu_count DatabaseAutonomousDatabase#ocpu_count}.

---

##### `openMode`<sup>Optional</sup> <a name="openMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.openMode"></a>

```typescript
public readonly openMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#open_mode DatabaseAutonomousDatabase#open_mode}.

---

##### `operationsInsightsStatus`<sup>Optional</sup> <a name="operationsInsightsStatus" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.operationsInsightsStatus"></a>

```typescript
public readonly operationsInsightsStatus: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#operations_insights_status DatabaseAutonomousDatabase#operations_insights_status}.

---

##### `permissionLevel`<sup>Optional</sup> <a name="permissionLevel" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.permissionLevel"></a>

```typescript
public readonly permissionLevel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#permission_level DatabaseAutonomousDatabase#permission_level}.

---

##### `privateEndpointIp`<sup>Optional</sup> <a name="privateEndpointIp" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.privateEndpointIp"></a>

```typescript
public readonly privateEndpointIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#private_endpoint_ip DatabaseAutonomousDatabase#private_endpoint_ip}.

---

##### `privateEndpointLabel`<sup>Optional</sup> <a name="privateEndpointLabel" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.privateEndpointLabel"></a>

```typescript
public readonly privateEndpointLabel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#private_endpoint_label DatabaseAutonomousDatabase#private_endpoint_label}.

---

##### `refreshableMode`<sup>Optional</sup> <a name="refreshableMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.refreshableMode"></a>

```typescript
public readonly refreshableMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#refreshable_mode DatabaseAutonomousDatabase#refreshable_mode}.

---

##### `remoteDisasterRecoveryType`<sup>Optional</sup> <a name="remoteDisasterRecoveryType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.remoteDisasterRecoveryType"></a>

```typescript
public readonly remoteDisasterRecoveryType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#remote_disaster_recovery_type DatabaseAutonomousDatabase#remote_disaster_recovery_type}.

---

##### `resourcePoolLeaderId`<sup>Optional</sup> <a name="resourcePoolLeaderId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.resourcePoolLeaderId"></a>

```typescript
public readonly resourcePoolLeaderId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#resource_pool_leader_id DatabaseAutonomousDatabase#resource_pool_leader_id}.

---

##### `resourcePoolSummary`<sup>Optional</sup> <a name="resourcePoolSummary" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.resourcePoolSummary"></a>

```typescript
public readonly resourcePoolSummary: DatabaseAutonomousDatabaseResourcePoolSummary;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary">DatabaseAutonomousDatabaseResourcePoolSummary</a>

resource_pool_summary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#resource_pool_summary DatabaseAutonomousDatabase#resource_pool_summary}

---

##### `rotateKeyTrigger`<sup>Optional</sup> <a name="rotateKeyTrigger" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.rotateKeyTrigger"></a>

```typescript
public readonly rotateKeyTrigger: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#rotate_key_trigger DatabaseAutonomousDatabase#rotate_key_trigger}.

---

##### `scheduledOperations`<sup>Optional</sup> <a name="scheduledOperations" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.scheduledOperations"></a>

```typescript
public readonly scheduledOperations: IResolvable | DatabaseAutonomousDatabaseScheduledOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations">DatabaseAutonomousDatabaseScheduledOperations</a>[]

scheduled_operations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#scheduled_operations DatabaseAutonomousDatabase#scheduled_operations}

---

##### `secretId`<sup>Optional</sup> <a name="secretId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#secret_id DatabaseAutonomousDatabase#secret_id}.

---

##### `secretVersionNumber`<sup>Optional</sup> <a name="secretVersionNumber" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.secretVersionNumber"></a>

```typescript
public readonly secretVersionNumber: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#secret_version_number DatabaseAutonomousDatabase#secret_version_number}.

---

##### `securityAttributes`<sup>Optional</sup> <a name="securityAttributes" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.securityAttributes"></a>

```typescript
public readonly securityAttributes: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#security_attributes DatabaseAutonomousDatabase#security_attributes}.

---

##### `shrinkAdbTrigger`<sup>Optional</sup> <a name="shrinkAdbTrigger" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.shrinkAdbTrigger"></a>

```typescript
public readonly shrinkAdbTrigger: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#shrink_adb_trigger DatabaseAutonomousDatabase#shrink_adb_trigger}.

---

##### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.source"></a>

```typescript
public readonly source: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#source DatabaseAutonomousDatabase#source}.

---

##### `sourceId`<sup>Optional</sup> <a name="sourceId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.sourceId"></a>

```typescript
public readonly sourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#source_id DatabaseAutonomousDatabase#source_id}.

---

##### `standbyWhitelistedIps`<sup>Optional</sup> <a name="standbyWhitelistedIps" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.standbyWhitelistedIps"></a>

```typescript
public readonly standbyWhitelistedIps: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#standby_whitelisted_ips DatabaseAutonomousDatabase#standby_whitelisted_ips}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#state DatabaseAutonomousDatabase#state}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#subnet_id DatabaseAutonomousDatabase#subnet_id}.

---

##### `subscriptionId`<sup>Optional</sup> <a name="subscriptionId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.subscriptionId"></a>

```typescript
public readonly subscriptionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#subscription_id DatabaseAutonomousDatabase#subscription_id}.

---

##### `switchoverTo`<sup>Optional</sup> <a name="switchoverTo" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.switchoverTo"></a>

```typescript
public readonly switchoverTo: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#switchover_to DatabaseAutonomousDatabase#switchover_to}.

---

##### `switchoverToRemotePeerId`<sup>Optional</sup> <a name="switchoverToRemotePeerId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.switchoverToRemotePeerId"></a>

```typescript
public readonly switchoverToRemotePeerId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#switchover_to_remote_peer_id DatabaseAutonomousDatabase#switchover_to_remote_peer_id}.

---

##### `timeOfAutoRefreshStart`<sup>Optional</sup> <a name="timeOfAutoRefreshStart" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.timeOfAutoRefreshStart"></a>

```typescript
public readonly timeOfAutoRefreshStart: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#time_of_auto_refresh_start DatabaseAutonomousDatabase#time_of_auto_refresh_start}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DatabaseAutonomousDatabaseTimeouts;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts">DatabaseAutonomousDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#timeouts DatabaseAutonomousDatabase#timeouts}

---

##### `timestamp`<sup>Optional</sup> <a name="timestamp" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.timestamp"></a>

```typescript
public readonly timestamp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#timestamp DatabaseAutonomousDatabase#timestamp}.

---

##### `useLatestAvailableBackupTimeStamp`<sup>Optional</sup> <a name="useLatestAvailableBackupTimeStamp" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.useLatestAvailableBackupTimeStamp"></a>

```typescript
public readonly useLatestAvailableBackupTimeStamp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#use_latest_available_backup_time_stamp DatabaseAutonomousDatabase#use_latest_available_backup_time_stamp}.

---

##### `vaultId`<sup>Optional</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#vault_id DatabaseAutonomousDatabase#vault_id}.

---

##### `whitelistedIps`<sup>Optional</sup> <a name="whitelistedIps" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConfig.property.whitelistedIps"></a>

```typescript
public readonly whitelistedIps: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#whitelisted_ips DatabaseAutonomousDatabase#whitelisted_ips}.

---

### DatabaseAutonomousDatabaseConnectionStrings <a name="DatabaseAutonomousDatabaseConnectionStrings" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStrings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStrings.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousDatabaseConnectionStrings: databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStrings = { ... }
```


### DatabaseAutonomousDatabaseConnectionStringsProfiles <a name="DatabaseAutonomousDatabaseConnectionStringsProfiles" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfiles"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfiles.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousDatabaseConnectionStringsProfiles: databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfiles = { ... }
```


### DatabaseAutonomousDatabaseConnectionUrls <a name="DatabaseAutonomousDatabaseConnectionUrls" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrls.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousDatabaseConnectionUrls: databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrls = { ... }
```


### DatabaseAutonomousDatabaseCustomerContacts <a name="DatabaseAutonomousDatabaseCustomerContacts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousDatabaseCustomerContacts: databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts.property.email">email</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#email DatabaseAutonomousDatabase#email}. |

---

##### `email`<sup>Optional</sup> <a name="email" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#email DatabaseAutonomousDatabase#email}.

---

### DatabaseAutonomousDatabaseDbToolsDetails <a name="DatabaseAutonomousDatabaseDbToolsDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousDatabaseDbToolsDetails: databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#name DatabaseAutonomousDatabase#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails.property.computeCount">computeCount</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#compute_count DatabaseAutonomousDatabase#compute_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_enabled DatabaseAutonomousDatabase#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails.property.maxIdleTimeInMinutes">maxIdleTimeInMinutes</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#max_idle_time_in_minutes DatabaseAutonomousDatabase#max_idle_time_in_minutes}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#name DatabaseAutonomousDatabase#name}.

---

##### `computeCount`<sup>Optional</sup> <a name="computeCount" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails.property.computeCount"></a>

```typescript
public readonly computeCount: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#compute_count DatabaseAutonomousDatabase#compute_count}.

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_enabled DatabaseAutonomousDatabase#is_enabled}.

---

##### `maxIdleTimeInMinutes`<sup>Optional</sup> <a name="maxIdleTimeInMinutes" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails.property.maxIdleTimeInMinutes"></a>

```typescript
public readonly maxIdleTimeInMinutes: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#max_idle_time_in_minutes DatabaseAutonomousDatabase#max_idle_time_in_minutes}.

---

### DatabaseAutonomousDatabaseEncryptionKey <a name="DatabaseAutonomousDatabaseEncryptionKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousDatabaseEncryptionKey: databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.arnRole">arnRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#arn_role DatabaseAutonomousDatabase#arn_role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.autonomousDatabaseProvider">autonomousDatabaseProvider</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_database_provider DatabaseAutonomousDatabase#autonomous_database_provider}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.certificateDirectoryName">certificateDirectoryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#certificate_directory_name DatabaseAutonomousDatabase#certificate_directory_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.certificateId">certificateId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#certificate_id DatabaseAutonomousDatabase#certificate_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.directoryName">directoryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#directory_name DatabaseAutonomousDatabase#directory_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.externalId">externalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#external_id DatabaseAutonomousDatabase#external_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.keyArn">keyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#key_arn DatabaseAutonomousDatabase#key_arn}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.keyName">keyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#key_name DatabaseAutonomousDatabase#key_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#kms_key_id DatabaseAutonomousDatabase#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.okvKmsKey">okvKmsKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#okv_kms_key DatabaseAutonomousDatabase#okv_kms_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.okvUri">okvUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#okv_uri DatabaseAutonomousDatabase#okv_uri}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.serviceEndpointUri">serviceEndpointUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#service_endpoint_uri DatabaseAutonomousDatabase#service_endpoint_uri}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.vaultId">vaultId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#vault_id DatabaseAutonomousDatabase#vault_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.vaultUri">vaultUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#vault_uri DatabaseAutonomousDatabase#vault_uri}. |

---

##### `arnRole`<sup>Optional</sup> <a name="arnRole" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.arnRole"></a>

```typescript
public readonly arnRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#arn_role DatabaseAutonomousDatabase#arn_role}.

---

##### `autonomousDatabaseProvider`<sup>Optional</sup> <a name="autonomousDatabaseProvider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.autonomousDatabaseProvider"></a>

```typescript
public readonly autonomousDatabaseProvider: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#autonomous_database_provider DatabaseAutonomousDatabase#autonomous_database_provider}.

---

##### `certificateDirectoryName`<sup>Optional</sup> <a name="certificateDirectoryName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.certificateDirectoryName"></a>

```typescript
public readonly certificateDirectoryName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#certificate_directory_name DatabaseAutonomousDatabase#certificate_directory_name}.

---

##### `certificateId`<sup>Optional</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#certificate_id DatabaseAutonomousDatabase#certificate_id}.

---

##### `directoryName`<sup>Optional</sup> <a name="directoryName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.directoryName"></a>

```typescript
public readonly directoryName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#directory_name DatabaseAutonomousDatabase#directory_name}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#external_id DatabaseAutonomousDatabase#external_id}.

---

##### `keyArn`<sup>Optional</sup> <a name="keyArn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.keyArn"></a>

```typescript
public readonly keyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#key_arn DatabaseAutonomousDatabase#key_arn}.

---

##### `keyName`<sup>Optional</sup> <a name="keyName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#key_name DatabaseAutonomousDatabase#key_name}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#kms_key_id DatabaseAutonomousDatabase#kms_key_id}.

---

##### `okvKmsKey`<sup>Optional</sup> <a name="okvKmsKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.okvKmsKey"></a>

```typescript
public readonly okvKmsKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#okv_kms_key DatabaseAutonomousDatabase#okv_kms_key}.

---

##### `okvUri`<sup>Optional</sup> <a name="okvUri" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.okvUri"></a>

```typescript
public readonly okvUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#okv_uri DatabaseAutonomousDatabase#okv_uri}.

---

##### `serviceEndpointUri`<sup>Optional</sup> <a name="serviceEndpointUri" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.serviceEndpointUri"></a>

```typescript
public readonly serviceEndpointUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#service_endpoint_uri DatabaseAutonomousDatabase#service_endpoint_uri}.

---

##### `vaultId`<sup>Optional</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#vault_id DatabaseAutonomousDatabase#vault_id}.

---

##### `vaultUri`<sup>Optional</sup> <a name="vaultUri" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey.property.vaultUri"></a>

```typescript
public readonly vaultUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#vault_uri DatabaseAutonomousDatabase#vault_uri}.

---

### DatabaseAutonomousDatabaseEncryptionKeyHistoryEntry <a name="DatabaseAutonomousDatabaseEncryptionKeyHistoryEntry" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntry"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntry.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousDatabaseEncryptionKeyHistoryEntry: databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntry = { ... }
```


### DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey <a name="DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey: databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey = { ... }
```


### DatabaseAutonomousDatabaseKeyHistoryEntry <a name="DatabaseAutonomousDatabaseKeyHistoryEntry" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntry"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntry.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousDatabaseKeyHistoryEntry: databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntry = { ... }
```


### DatabaseAutonomousDatabaseLocalStandbyDb <a name="DatabaseAutonomousDatabaseLocalStandbyDb" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDb"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDb.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousDatabaseLocalStandbyDb: databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDb = { ... }
```


### DatabaseAutonomousDatabaseLongTermBackupSchedule <a name="DatabaseAutonomousDatabaseLongTermBackupSchedule" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousDatabaseLongTermBackupSchedule: databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule.property.isDisabled">isDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_disabled DatabaseAutonomousDatabase#is_disabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule.property.repeatCadence">repeatCadence</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#repeat_cadence DatabaseAutonomousDatabase#repeat_cadence}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule.property.retentionPeriodInDays">retentionPeriodInDays</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#retention_period_in_days DatabaseAutonomousDatabase#retention_period_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule.property.timeOfBackup">timeOfBackup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#time_of_backup DatabaseAutonomousDatabase#time_of_backup}. |

---

##### `isDisabled`<sup>Optional</sup> <a name="isDisabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule.property.isDisabled"></a>

```typescript
public readonly isDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_disabled DatabaseAutonomousDatabase#is_disabled}.

---

##### `repeatCadence`<sup>Optional</sup> <a name="repeatCadence" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule.property.repeatCadence"></a>

```typescript
public readonly repeatCadence: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#repeat_cadence DatabaseAutonomousDatabase#repeat_cadence}.

---

##### `retentionPeriodInDays`<sup>Optional</sup> <a name="retentionPeriodInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule.property.retentionPeriodInDays"></a>

```typescript
public readonly retentionPeriodInDays: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#retention_period_in_days DatabaseAutonomousDatabase#retention_period_in_days}.

---

##### `timeOfBackup`<sup>Optional</sup> <a name="timeOfBackup" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule.property.timeOfBackup"></a>

```typescript
public readonly timeOfBackup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#time_of_backup DatabaseAutonomousDatabase#time_of_backup}.

---

### DatabaseAutonomousDatabasePublicConnectionUrls <a name="DatabaseAutonomousDatabasePublicConnectionUrls" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrls"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrls.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousDatabasePublicConnectionUrls: databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrls = { ... }
```


### DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration <a name="DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration: databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration = { ... }
```


### DatabaseAutonomousDatabaseResourcePoolSummary <a name="DatabaseAutonomousDatabaseResourcePoolSummary" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousDatabaseResourcePoolSummary: databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary.property.isDisabled">isDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_disabled DatabaseAutonomousDatabase#is_disabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary.property.poolSize">poolSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#pool_size DatabaseAutonomousDatabase#pool_size}. |

---

##### `isDisabled`<sup>Optional</sup> <a name="isDisabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary.property.isDisabled"></a>

```typescript
public readonly isDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#is_disabled DatabaseAutonomousDatabase#is_disabled}.

---

##### `poolSize`<sup>Optional</sup> <a name="poolSize" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary.property.poolSize"></a>

```typescript
public readonly poolSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#pool_size DatabaseAutonomousDatabase#pool_size}.

---

### DatabaseAutonomousDatabaseScheduledOperations <a name="DatabaseAutonomousDatabaseScheduledOperations" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousDatabaseScheduledOperations: databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations.property.dayOfWeek">dayOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek">DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek</a></code> | day_of_week block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations.property.scheduledStartTime">scheduledStartTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#scheduled_start_time DatabaseAutonomousDatabase#scheduled_start_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations.property.scheduledStopTime">scheduledStopTime</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#scheduled_stop_time DatabaseAutonomousDatabase#scheduled_stop_time}. |

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek">DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek</a>

day_of_week block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#day_of_week DatabaseAutonomousDatabase#day_of_week}

---

##### `scheduledStartTime`<sup>Optional</sup> <a name="scheduledStartTime" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations.property.scheduledStartTime"></a>

```typescript
public readonly scheduledStartTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#scheduled_start_time DatabaseAutonomousDatabase#scheduled_start_time}.

---

##### `scheduledStopTime`<sup>Optional</sup> <a name="scheduledStopTime" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations.property.scheduledStopTime"></a>

```typescript
public readonly scheduledStopTime: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#scheduled_stop_time DatabaseAutonomousDatabase#scheduled_stop_time}.

---

### DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek <a name="DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousDatabaseScheduledOperationsDayOfWeek: databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#name DatabaseAutonomousDatabase#name}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#name DatabaseAutonomousDatabase#name}.

---

### DatabaseAutonomousDatabaseStandbyDb <a name="DatabaseAutonomousDatabaseStandbyDb" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDb"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDb.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousDatabaseStandbyDb: databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDb = { ... }
```


### DatabaseAutonomousDatabaseTimeouts <a name="DatabaseAutonomousDatabaseTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

const databaseAutonomousDatabaseTimeouts: databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#create DatabaseAutonomousDatabase#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#delete DatabaseAutonomousDatabase#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#update DatabaseAutonomousDatabase#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#create DatabaseAutonomousDatabase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#delete DatabaseAutonomousDatabase#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database#update DatabaseAutonomousDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseAutonomousDatabaseApexDetailsList <a name="DatabaseAutonomousDatabaseApexDetailsList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.get"></a>

```typescript
public get(index: number): DatabaseAutonomousDatabaseApexDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabaseAutonomousDatabaseApexDetailsOutputReference <a name="DatabaseAutonomousDatabaseApexDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.property.apexVersion">apexVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.property.ordsVersion">ordsVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetails">DatabaseAutonomousDatabaseApexDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apexVersion`<sup>Required</sup> <a name="apexVersion" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.property.apexVersion"></a>

```typescript
public readonly apexVersion: string;
```

- *Type:* string

---

##### `ordsVersion`<sup>Required</sup> <a name="ordsVersion" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.property.ordsVersion"></a>

```typescript
public readonly ordsVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseAutonomousDatabaseApexDetails;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseApexDetails">DatabaseAutonomousDatabaseApexDetails</a>

---


### DatabaseAutonomousDatabaseBackupConfigList <a name="DatabaseAutonomousDatabaseBackupConfigList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.get"></a>

```typescript
public get(index: number): DatabaseAutonomousDatabaseBackupConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabaseAutonomousDatabaseBackupConfigOutputReference <a name="DatabaseAutonomousDatabaseBackupConfigOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.property.manualBackupBucketName">manualBackupBucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.property.manualBackupType">manualBackupType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfig">DatabaseAutonomousDatabaseBackupConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `manualBackupBucketName`<sup>Required</sup> <a name="manualBackupBucketName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.property.manualBackupBucketName"></a>

```typescript
public readonly manualBackupBucketName: string;
```

- *Type:* string

---

##### `manualBackupType`<sup>Required</sup> <a name="manualBackupType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.property.manualBackupType"></a>

```typescript
public readonly manualBackupType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseAutonomousDatabaseBackupConfig;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseBackupConfig">DatabaseAutonomousDatabaseBackupConfig</a>

---


### DatabaseAutonomousDatabaseConnectionStringsList <a name="DatabaseAutonomousDatabaseConnectionStringsList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.get"></a>

```typescript
public get(index: number): DatabaseAutonomousDatabaseConnectionStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabaseAutonomousDatabaseConnectionStringsOutputReference <a name="DatabaseAutonomousDatabaseConnectionStringsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.allConnectionStrings">allConnectionStrings</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.dedicated">dedicated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.high">high</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.low">low</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.medium">medium</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.profiles">profiles</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList">DatabaseAutonomousDatabaseConnectionStringsProfilesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStrings">DatabaseAutonomousDatabaseConnectionStrings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allConnectionStrings`<sup>Required</sup> <a name="allConnectionStrings" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.allConnectionStrings"></a>

```typescript
public readonly allConnectionStrings: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `dedicated`<sup>Required</sup> <a name="dedicated" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.dedicated"></a>

```typescript
public readonly dedicated: string;
```

- *Type:* string

---

##### `high`<sup>Required</sup> <a name="high" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.high"></a>

```typescript
public readonly high: string;
```

- *Type:* string

---

##### `low`<sup>Required</sup> <a name="low" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.low"></a>

```typescript
public readonly low: string;
```

- *Type:* string

---

##### `medium`<sup>Required</sup> <a name="medium" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.medium"></a>

```typescript
public readonly medium: string;
```

- *Type:* string

---

##### `profiles`<sup>Required</sup> <a name="profiles" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.profiles"></a>

```typescript
public readonly profiles: DatabaseAutonomousDatabaseConnectionStringsProfilesList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList">DatabaseAutonomousDatabaseConnectionStringsProfilesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseAutonomousDatabaseConnectionStrings;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStrings">DatabaseAutonomousDatabaseConnectionStrings</a>

---


### DatabaseAutonomousDatabaseConnectionStringsProfilesList <a name="DatabaseAutonomousDatabaseConnectionStringsProfilesList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.get"></a>

```typescript
public get(index: number): DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference <a name="DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.consumerGroup">consumerGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.hostFormat">hostFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.isRegional">isRegional</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.sessionMode">sessionMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.syntaxFormat">syntaxFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.tlsAuthentication">tlsAuthentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfiles">DatabaseAutonomousDatabaseConnectionStringsProfiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `consumerGroup`<sup>Required</sup> <a name="consumerGroup" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.consumerGroup"></a>

```typescript
public readonly consumerGroup: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `hostFormat`<sup>Required</sup> <a name="hostFormat" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.hostFormat"></a>

```typescript
public readonly hostFormat: string;
```

- *Type:* string

---

##### `isRegional`<sup>Required</sup> <a name="isRegional" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.isRegional"></a>

```typescript
public readonly isRegional: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `sessionMode`<sup>Required</sup> <a name="sessionMode" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.sessionMode"></a>

```typescript
public readonly sessionMode: string;
```

- *Type:* string

---

##### `syntaxFormat`<sup>Required</sup> <a name="syntaxFormat" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.syntaxFormat"></a>

```typescript
public readonly syntaxFormat: string;
```

- *Type:* string

---

##### `tlsAuthentication`<sup>Required</sup> <a name="tlsAuthentication" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.tlsAuthentication"></a>

```typescript
public readonly tlsAuthentication: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfilesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseAutonomousDatabaseConnectionStringsProfiles;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionStringsProfiles">DatabaseAutonomousDatabaseConnectionStringsProfiles</a>

---


### DatabaseAutonomousDatabaseConnectionUrlsList <a name="DatabaseAutonomousDatabaseConnectionUrlsList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.get"></a>

```typescript
public get(index: number): DatabaseAutonomousDatabaseConnectionUrlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabaseAutonomousDatabaseConnectionUrlsOutputReference <a name="DatabaseAutonomousDatabaseConnectionUrlsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.apexUrl">apexUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.databaseTransformsUrl">databaseTransformsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.graphStudioUrl">graphStudioUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.machineLearningNotebookUrl">machineLearningNotebookUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.machineLearningUserManagementUrl">machineLearningUserManagementUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.mongoDbUrl">mongoDbUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.ordsUrl">ordsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.sqlDevWebUrl">sqlDevWebUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrls">DatabaseAutonomousDatabaseConnectionUrls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apexUrl`<sup>Required</sup> <a name="apexUrl" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.apexUrl"></a>

```typescript
public readonly apexUrl: string;
```

- *Type:* string

---

##### `databaseTransformsUrl`<sup>Required</sup> <a name="databaseTransformsUrl" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.databaseTransformsUrl"></a>

```typescript
public readonly databaseTransformsUrl: string;
```

- *Type:* string

---

##### `graphStudioUrl`<sup>Required</sup> <a name="graphStudioUrl" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.graphStudioUrl"></a>

```typescript
public readonly graphStudioUrl: string;
```

- *Type:* string

---

##### `machineLearningNotebookUrl`<sup>Required</sup> <a name="machineLearningNotebookUrl" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.machineLearningNotebookUrl"></a>

```typescript
public readonly machineLearningNotebookUrl: string;
```

- *Type:* string

---

##### `machineLearningUserManagementUrl`<sup>Required</sup> <a name="machineLearningUserManagementUrl" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.machineLearningUserManagementUrl"></a>

```typescript
public readonly machineLearningUserManagementUrl: string;
```

- *Type:* string

---

##### `mongoDbUrl`<sup>Required</sup> <a name="mongoDbUrl" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.mongoDbUrl"></a>

```typescript
public readonly mongoDbUrl: string;
```

- *Type:* string

---

##### `ordsUrl`<sup>Required</sup> <a name="ordsUrl" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.ordsUrl"></a>

```typescript
public readonly ordsUrl: string;
```

- *Type:* string

---

##### `sqlDevWebUrl`<sup>Required</sup> <a name="sqlDevWebUrl" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.sqlDevWebUrl"></a>

```typescript
public readonly sqlDevWebUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrlsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseAutonomousDatabaseConnectionUrls;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseConnectionUrls">DatabaseAutonomousDatabaseConnectionUrls</a>

---


### DatabaseAutonomousDatabaseCustomerContactsList <a name="DatabaseAutonomousDatabaseCustomerContactsList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.get"></a>

```typescript
public get(index: number): DatabaseAutonomousDatabaseCustomerContactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts">DatabaseAutonomousDatabaseCustomerContacts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseAutonomousDatabaseCustomerContacts[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts">DatabaseAutonomousDatabaseCustomerContacts</a>[]

---


### DatabaseAutonomousDatabaseCustomerContactsOutputReference <a name="DatabaseAutonomousDatabaseCustomerContactsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.resetEmail">resetEmail</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmail` <a name="resetEmail" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.resetEmail"></a>

```typescript
public resetEmail(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.property.emailInput">emailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.property.email">email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts">DatabaseAutonomousDatabaseCustomerContacts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.property.emailInput"></a>

```typescript
public readonly emailInput: string;
```

- *Type:* string

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.property.email"></a>

```typescript
public readonly email: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContactsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseAutonomousDatabaseCustomerContacts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseCustomerContacts">DatabaseAutonomousDatabaseCustomerContacts</a>

---


### DatabaseAutonomousDatabaseDbToolsDetailsList <a name="DatabaseAutonomousDatabaseDbToolsDetailsList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.get"></a>

```typescript
public get(index: number): DatabaseAutonomousDatabaseDbToolsDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails">DatabaseAutonomousDatabaseDbToolsDetails</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseAutonomousDatabaseDbToolsDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails">DatabaseAutonomousDatabaseDbToolsDetails</a>[]

---


### DatabaseAutonomousDatabaseDbToolsDetailsOutputReference <a name="DatabaseAutonomousDatabaseDbToolsDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.resetComputeCount">resetComputeCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.resetMaxIdleTimeInMinutes">resetMaxIdleTimeInMinutes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComputeCount` <a name="resetComputeCount" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.resetComputeCount"></a>

```typescript
public resetComputeCount(): void
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.resetIsEnabled"></a>

```typescript
public resetIsEnabled(): void
```

##### `resetMaxIdleTimeInMinutes` <a name="resetMaxIdleTimeInMinutes" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.resetMaxIdleTimeInMinutes"></a>

```typescript
public resetMaxIdleTimeInMinutes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCountInput">computeCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutesInput">maxIdleTimeInMinutesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCount">computeCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabled">isEnabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutes">maxIdleTimeInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails">DatabaseAutonomousDatabaseDbToolsDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `computeCountInput`<sup>Optional</sup> <a name="computeCountInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCountInput"></a>

```typescript
public readonly computeCountInput: number;
```

- *Type:* number

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabledInput"></a>

```typescript
public readonly isEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxIdleTimeInMinutesInput`<sup>Optional</sup> <a name="maxIdleTimeInMinutesInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutesInput"></a>

```typescript
public readonly maxIdleTimeInMinutesInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.computeCount"></a>

```typescript
public readonly computeCount: number;
```

- *Type:* number

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.isEnabled"></a>

```typescript
public readonly isEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maxIdleTimeInMinutes`<sup>Required</sup> <a name="maxIdleTimeInMinutes" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.maxIdleTimeInMinutes"></a>

```typescript
public readonly maxIdleTimeInMinutes: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseAutonomousDatabaseDbToolsDetails;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseDbToolsDetails">DatabaseAutonomousDatabaseDbToolsDetails</a>

---


### DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList <a name="DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.get"></a>

```typescript
public get(index: number): DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference <a name="DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.arnRole">arnRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.autonomousDatabaseProvider">autonomousDatabaseProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.certificateDirectoryName">certificateDirectoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.certificateId">certificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.directoryName">directoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.keyArn">keyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.okvKmsKey">okvKmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.okvUri">okvUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.serviceEndpointUri">serviceEndpointUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.vaultId">vaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.vaultUri">vaultUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey">DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arnRole`<sup>Required</sup> <a name="arnRole" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.arnRole"></a>

```typescript
public readonly arnRole: string;
```

- *Type:* string

---

##### `autonomousDatabaseProvider`<sup>Required</sup> <a name="autonomousDatabaseProvider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.autonomousDatabaseProvider"></a>

```typescript
public readonly autonomousDatabaseProvider: string;
```

- *Type:* string

---

##### `certificateDirectoryName`<sup>Required</sup> <a name="certificateDirectoryName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.certificateDirectoryName"></a>

```typescript
public readonly certificateDirectoryName: string;
```

- *Type:* string

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

---

##### `directoryName`<sup>Required</sup> <a name="directoryName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.directoryName"></a>

```typescript
public readonly directoryName: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `keyArn`<sup>Required</sup> <a name="keyArn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.keyArn"></a>

```typescript
public readonly keyArn: string;
```

- *Type:* string

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `okvKmsKey`<sup>Required</sup> <a name="okvKmsKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.okvKmsKey"></a>

```typescript
public readonly okvKmsKey: string;
```

- *Type:* string

---

##### `okvUri`<sup>Required</sup> <a name="okvUri" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.okvUri"></a>

```typescript
public readonly okvUri: string;
```

- *Type:* string

---

##### `serviceEndpointUri`<sup>Required</sup> <a name="serviceEndpointUri" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.serviceEndpointUri"></a>

```typescript
public readonly serviceEndpointUri: string;
```

- *Type:* string

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

---

##### `vaultUri`<sup>Required</sup> <a name="vaultUri" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.vaultUri"></a>

```typescript
public readonly vaultUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey">DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKey</a>

---


### DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList <a name="DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.get"></a>

```typescript
public get(index: number): DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference <a name="DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.encryptionKey">encryptionKey</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList">DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.timeActivated">timeActivated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntry">DatabaseAutonomousDatabaseEncryptionKeyHistoryEntry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `encryptionKey`<sup>Required</sup> <a name="encryptionKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.encryptionKey"></a>

```typescript
public readonly encryptionKey: DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList">DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryEncryptionKeyList</a>

---

##### `timeActivated`<sup>Required</sup> <a name="timeActivated" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.timeActivated"></a>

```typescript
public readonly timeActivated: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseAutonomousDatabaseEncryptionKeyHistoryEntry;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyHistoryEntry">DatabaseAutonomousDatabaseEncryptionKeyHistoryEntry</a>

---


### DatabaseAutonomousDatabaseEncryptionKeyOutputReference <a name="DatabaseAutonomousDatabaseEncryptionKeyOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetArnRole">resetArnRole</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetAutonomousDatabaseProvider">resetAutonomousDatabaseProvider</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetCertificateDirectoryName">resetCertificateDirectoryName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetCertificateId">resetCertificateId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetDirectoryName">resetDirectoryName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetExternalId">resetExternalId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetKeyArn">resetKeyArn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetKeyName">resetKeyName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetOkvKmsKey">resetOkvKmsKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetOkvUri">resetOkvUri</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetServiceEndpointUri">resetServiceEndpointUri</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetVaultId">resetVaultId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetVaultUri">resetVaultUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArnRole` <a name="resetArnRole" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetArnRole"></a>

```typescript
public resetArnRole(): void
```

##### `resetAutonomousDatabaseProvider` <a name="resetAutonomousDatabaseProvider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetAutonomousDatabaseProvider"></a>

```typescript
public resetAutonomousDatabaseProvider(): void
```

##### `resetCertificateDirectoryName` <a name="resetCertificateDirectoryName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetCertificateDirectoryName"></a>

```typescript
public resetCertificateDirectoryName(): void
```

##### `resetCertificateId` <a name="resetCertificateId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetCertificateId"></a>

```typescript
public resetCertificateId(): void
```

##### `resetDirectoryName` <a name="resetDirectoryName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetDirectoryName"></a>

```typescript
public resetDirectoryName(): void
```

##### `resetExternalId` <a name="resetExternalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetExternalId"></a>

```typescript
public resetExternalId(): void
```

##### `resetKeyArn` <a name="resetKeyArn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetKeyArn"></a>

```typescript
public resetKeyArn(): void
```

##### `resetKeyName` <a name="resetKeyName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetKeyName"></a>

```typescript
public resetKeyName(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetOkvKmsKey` <a name="resetOkvKmsKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetOkvKmsKey"></a>

```typescript
public resetOkvKmsKey(): void
```

##### `resetOkvUri` <a name="resetOkvUri" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetOkvUri"></a>

```typescript
public resetOkvUri(): void
```

##### `resetServiceEndpointUri` <a name="resetServiceEndpointUri" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetServiceEndpointUri"></a>

```typescript
public resetServiceEndpointUri(): void
```

##### `resetVaultId` <a name="resetVaultId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetVaultId"></a>

```typescript
public resetVaultId(): void
```

##### `resetVaultUri` <a name="resetVaultUri" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.resetVaultUri"></a>

```typescript
public resetVaultUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.arnRoleInput">arnRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.autonomousDatabaseProviderInput">autonomousDatabaseProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.certificateDirectoryNameInput">certificateDirectoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.certificateIdInput">certificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.directoryNameInput">directoryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.externalIdInput">externalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.keyArnInput">keyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.keyNameInput">keyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.okvKmsKeyInput">okvKmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.okvUriInput">okvUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.serviceEndpointUriInput">serviceEndpointUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.vaultIdInput">vaultIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.vaultUriInput">vaultUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.arnRole">arnRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.autonomousDatabaseProvider">autonomousDatabaseProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.certificateDirectoryName">certificateDirectoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.certificateId">certificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.directoryName">directoryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.keyArn">keyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.keyName">keyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.okvKmsKey">okvKmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.okvUri">okvUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.serviceEndpointUri">serviceEndpointUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.vaultId">vaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.vaultUri">vaultUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey">DatabaseAutonomousDatabaseEncryptionKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arnRoleInput`<sup>Optional</sup> <a name="arnRoleInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.arnRoleInput"></a>

```typescript
public readonly arnRoleInput: string;
```

- *Type:* string

---

##### `autonomousDatabaseProviderInput`<sup>Optional</sup> <a name="autonomousDatabaseProviderInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.autonomousDatabaseProviderInput"></a>

```typescript
public readonly autonomousDatabaseProviderInput: string;
```

- *Type:* string

---

##### `certificateDirectoryNameInput`<sup>Optional</sup> <a name="certificateDirectoryNameInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.certificateDirectoryNameInput"></a>

```typescript
public readonly certificateDirectoryNameInput: string;
```

- *Type:* string

---

##### `certificateIdInput`<sup>Optional</sup> <a name="certificateIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.certificateIdInput"></a>

```typescript
public readonly certificateIdInput: string;
```

- *Type:* string

---

##### `directoryNameInput`<sup>Optional</sup> <a name="directoryNameInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.directoryNameInput"></a>

```typescript
public readonly directoryNameInput: string;
```

- *Type:* string

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: string;
```

- *Type:* string

---

##### `keyArnInput`<sup>Optional</sup> <a name="keyArnInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.keyArnInput"></a>

```typescript
public readonly keyArnInput: string;
```

- *Type:* string

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.keyNameInput"></a>

```typescript
public readonly keyNameInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `okvKmsKeyInput`<sup>Optional</sup> <a name="okvKmsKeyInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.okvKmsKeyInput"></a>

```typescript
public readonly okvKmsKeyInput: string;
```

- *Type:* string

---

##### `okvUriInput`<sup>Optional</sup> <a name="okvUriInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.okvUriInput"></a>

```typescript
public readonly okvUriInput: string;
```

- *Type:* string

---

##### `serviceEndpointUriInput`<sup>Optional</sup> <a name="serviceEndpointUriInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.serviceEndpointUriInput"></a>

```typescript
public readonly serviceEndpointUriInput: string;
```

- *Type:* string

---

##### `vaultIdInput`<sup>Optional</sup> <a name="vaultIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.vaultIdInput"></a>

```typescript
public readonly vaultIdInput: string;
```

- *Type:* string

---

##### `vaultUriInput`<sup>Optional</sup> <a name="vaultUriInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.vaultUriInput"></a>

```typescript
public readonly vaultUriInput: string;
```

- *Type:* string

---

##### `arnRole`<sup>Required</sup> <a name="arnRole" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.arnRole"></a>

```typescript
public readonly arnRole: string;
```

- *Type:* string

---

##### `autonomousDatabaseProvider`<sup>Required</sup> <a name="autonomousDatabaseProvider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.autonomousDatabaseProvider"></a>

```typescript
public readonly autonomousDatabaseProvider: string;
```

- *Type:* string

---

##### `certificateDirectoryName`<sup>Required</sup> <a name="certificateDirectoryName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.certificateDirectoryName"></a>

```typescript
public readonly certificateDirectoryName: string;
```

- *Type:* string

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.certificateId"></a>

```typescript
public readonly certificateId: string;
```

- *Type:* string

---

##### `directoryName`<sup>Required</sup> <a name="directoryName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.directoryName"></a>

```typescript
public readonly directoryName: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `keyArn`<sup>Required</sup> <a name="keyArn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.keyArn"></a>

```typescript
public readonly keyArn: string;
```

- *Type:* string

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.keyName"></a>

```typescript
public readonly keyName: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `okvKmsKey`<sup>Required</sup> <a name="okvKmsKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.okvKmsKey"></a>

```typescript
public readonly okvKmsKey: string;
```

- *Type:* string

---

##### `okvUri`<sup>Required</sup> <a name="okvUri" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.okvUri"></a>

```typescript
public readonly okvUri: string;
```

- *Type:* string

---

##### `serviceEndpointUri`<sup>Required</sup> <a name="serviceEndpointUri" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.serviceEndpointUri"></a>

```typescript
public readonly serviceEndpointUri: string;
```

- *Type:* string

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

---

##### `vaultUri`<sup>Required</sup> <a name="vaultUri" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.vaultUri"></a>

```typescript
public readonly vaultUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseAutonomousDatabaseEncryptionKey;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseEncryptionKey">DatabaseAutonomousDatabaseEncryptionKey</a>

---


### DatabaseAutonomousDatabaseKeyHistoryEntryList <a name="DatabaseAutonomousDatabaseKeyHistoryEntryList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.get"></a>

```typescript
public get(index: number): DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference <a name="DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.kmsKeyVersionId">kmsKeyVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.timeActivated">timeActivated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.vaultId">vaultId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntry">DatabaseAutonomousDatabaseKeyHistoryEntry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyVersionId`<sup>Required</sup> <a name="kmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.kmsKeyVersionId"></a>

```typescript
public readonly kmsKeyVersionId: string;
```

- *Type:* string

---

##### `timeActivated`<sup>Required</sup> <a name="timeActivated" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.timeActivated"></a>

```typescript
public readonly timeActivated: string;
```

- *Type:* string

---

##### `vaultId`<sup>Required</sup> <a name="vaultId" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.vaultId"></a>

```typescript
public readonly vaultId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseAutonomousDatabaseKeyHistoryEntry;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseKeyHistoryEntry">DatabaseAutonomousDatabaseKeyHistoryEntry</a>

---


### DatabaseAutonomousDatabaseLocalStandbyDbList <a name="DatabaseAutonomousDatabaseLocalStandbyDbList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.get"></a>

```typescript
public get(index: number): DatabaseAutonomousDatabaseLocalStandbyDbOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabaseAutonomousDatabaseLocalStandbyDbOutputReference <a name="DatabaseAutonomousDatabaseLocalStandbyDbOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.lagTimeInSeconds">lagTimeInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.timeDataGuardRoleChanged">timeDataGuardRoleChanged</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.timeDisasterRecoveryRoleChanged">timeDisasterRecoveryRoleChanged</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDb">DatabaseAutonomousDatabaseLocalStandbyDb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `lagTimeInSeconds`<sup>Required</sup> <a name="lagTimeInSeconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.lagTimeInSeconds"></a>

```typescript
public readonly lagTimeInSeconds: number;
```

- *Type:* number

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeDataGuardRoleChanged`<sup>Required</sup> <a name="timeDataGuardRoleChanged" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.timeDataGuardRoleChanged"></a>

```typescript
public readonly timeDataGuardRoleChanged: string;
```

- *Type:* string

---

##### `timeDisasterRecoveryRoleChanged`<sup>Required</sup> <a name="timeDisasterRecoveryRoleChanged" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.timeDisasterRecoveryRoleChanged"></a>

```typescript
public readonly timeDisasterRecoveryRoleChanged: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDbOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseAutonomousDatabaseLocalStandbyDb;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLocalStandbyDb">DatabaseAutonomousDatabaseLocalStandbyDb</a>

---


### DatabaseAutonomousDatabaseLongTermBackupScheduleList <a name="DatabaseAutonomousDatabaseLongTermBackupScheduleList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.get"></a>

```typescript
public get(index: number): DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule">DatabaseAutonomousDatabaseLongTermBackupSchedule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseAutonomousDatabaseLongTermBackupSchedule[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule">DatabaseAutonomousDatabaseLongTermBackupSchedule</a>[]

---


### DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference <a name="DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.resetIsDisabled">resetIsDisabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.resetRepeatCadence">resetRepeatCadence</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.resetRetentionPeriodInDays">resetRetentionPeriodInDays</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.resetTimeOfBackup">resetTimeOfBackup</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsDisabled` <a name="resetIsDisabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.resetIsDisabled"></a>

```typescript
public resetIsDisabled(): void
```

##### `resetRepeatCadence` <a name="resetRepeatCadence" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.resetRepeatCadence"></a>

```typescript
public resetRepeatCadence(): void
```

##### `resetRetentionPeriodInDays` <a name="resetRetentionPeriodInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.resetRetentionPeriodInDays"></a>

```typescript
public resetRetentionPeriodInDays(): void
```

##### `resetTimeOfBackup` <a name="resetTimeOfBackup" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.resetTimeOfBackup"></a>

```typescript
public resetTimeOfBackup(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabledInput">isDisabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadenceInput">repeatCadenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDaysInput">retentionPeriodInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackupInput">timeOfBackupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabled">isDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadence">repeatCadence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDays">retentionPeriodInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackup">timeOfBackup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule">DatabaseAutonomousDatabaseLongTermBackupSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isDisabledInput`<sup>Optional</sup> <a name="isDisabledInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabledInput"></a>

```typescript
public readonly isDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `repeatCadenceInput`<sup>Optional</sup> <a name="repeatCadenceInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadenceInput"></a>

```typescript
public readonly repeatCadenceInput: string;
```

- *Type:* string

---

##### `retentionPeriodInDaysInput`<sup>Optional</sup> <a name="retentionPeriodInDaysInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDaysInput"></a>

```typescript
public readonly retentionPeriodInDaysInput: number;
```

- *Type:* number

---

##### `timeOfBackupInput`<sup>Optional</sup> <a name="timeOfBackupInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackupInput"></a>

```typescript
public readonly timeOfBackupInput: string;
```

- *Type:* string

---

##### `isDisabled`<sup>Required</sup> <a name="isDisabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.isDisabled"></a>

```typescript
public readonly isDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `repeatCadence`<sup>Required</sup> <a name="repeatCadence" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.repeatCadence"></a>

```typescript
public readonly repeatCadence: string;
```

- *Type:* string

---

##### `retentionPeriodInDays`<sup>Required</sup> <a name="retentionPeriodInDays" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.retentionPeriodInDays"></a>

```typescript
public readonly retentionPeriodInDays: number;
```

- *Type:* number

---

##### `timeOfBackup`<sup>Required</sup> <a name="timeOfBackup" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.timeOfBackup"></a>

```typescript
public readonly timeOfBackup: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupScheduleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseAutonomousDatabaseLongTermBackupSchedule;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseLongTermBackupSchedule">DatabaseAutonomousDatabaseLongTermBackupSchedule</a>

---


### DatabaseAutonomousDatabasePublicConnectionUrlsList <a name="DatabaseAutonomousDatabasePublicConnectionUrlsList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.get"></a>

```typescript
public get(index: number): DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference <a name="DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.apexUrl">apexUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.databaseTransformsUrl">databaseTransformsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.graphStudioUrl">graphStudioUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.machineLearningNotebookUrl">machineLearningNotebookUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.machineLearningUserManagementUrl">machineLearningUserManagementUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.mongoDbUrl">mongoDbUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.ordsUrl">ordsUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.sqlDevWebUrl">sqlDevWebUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrls">DatabaseAutonomousDatabasePublicConnectionUrls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apexUrl`<sup>Required</sup> <a name="apexUrl" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.apexUrl"></a>

```typescript
public readonly apexUrl: string;
```

- *Type:* string

---

##### `databaseTransformsUrl`<sup>Required</sup> <a name="databaseTransformsUrl" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.databaseTransformsUrl"></a>

```typescript
public readonly databaseTransformsUrl: string;
```

- *Type:* string

---

##### `graphStudioUrl`<sup>Required</sup> <a name="graphStudioUrl" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.graphStudioUrl"></a>

```typescript
public readonly graphStudioUrl: string;
```

- *Type:* string

---

##### `machineLearningNotebookUrl`<sup>Required</sup> <a name="machineLearningNotebookUrl" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.machineLearningNotebookUrl"></a>

```typescript
public readonly machineLearningNotebookUrl: string;
```

- *Type:* string

---

##### `machineLearningUserManagementUrl`<sup>Required</sup> <a name="machineLearningUserManagementUrl" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.machineLearningUserManagementUrl"></a>

```typescript
public readonly machineLearningUserManagementUrl: string;
```

- *Type:* string

---

##### `mongoDbUrl`<sup>Required</sup> <a name="mongoDbUrl" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.mongoDbUrl"></a>

```typescript
public readonly mongoDbUrl: string;
```

- *Type:* string

---

##### `ordsUrl`<sup>Required</sup> <a name="ordsUrl" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.ordsUrl"></a>

```typescript
public readonly ordsUrl: string;
```

- *Type:* string

---

##### `sqlDevWebUrl`<sup>Required</sup> <a name="sqlDevWebUrl" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.sqlDevWebUrl"></a>

```typescript
public readonly sqlDevWebUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrlsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseAutonomousDatabasePublicConnectionUrls;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabasePublicConnectionUrls">DatabaseAutonomousDatabasePublicConnectionUrls</a>

---


### DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList <a name="DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.get"></a>

```typescript
public get(index: number): DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference <a name="DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.disasterRecoveryType">disasterRecoveryType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.isReplicateAutomaticBackups">isReplicateAutomaticBackups</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.isSnapshotStandby">isSnapshotStandby</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.timeSnapshotStandbyEnabledTill">timeSnapshotStandbyEnabledTill</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration">DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disasterRecoveryType`<sup>Required</sup> <a name="disasterRecoveryType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.disasterRecoveryType"></a>

```typescript
public readonly disasterRecoveryType: string;
```

- *Type:* string

---

##### `isReplicateAutomaticBackups`<sup>Required</sup> <a name="isReplicateAutomaticBackups" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.isReplicateAutomaticBackups"></a>

```typescript
public readonly isReplicateAutomaticBackups: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isSnapshotStandby`<sup>Required</sup> <a name="isSnapshotStandby" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.isSnapshotStandby"></a>

```typescript
public readonly isSnapshotStandby: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `timeSnapshotStandbyEnabledTill`<sup>Required</sup> <a name="timeSnapshotStandbyEnabledTill" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.timeSnapshotStandbyEnabledTill"></a>

```typescript
public readonly timeSnapshotStandbyEnabledTill: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration">DatabaseAutonomousDatabaseRemoteDisasterRecoveryConfiguration</a>

---


### DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference <a name="DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.resetIsDisabled">resetIsDisabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.resetPoolSize">resetPoolSize</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsDisabled` <a name="resetIsDisabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.resetIsDisabled"></a>

```typescript
public resetIsDisabled(): void
```

##### `resetPoolSize` <a name="resetPoolSize" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.resetPoolSize"></a>

```typescript
public resetPoolSize(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabledInput">isDisabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSizeInput">poolSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabled">isDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSize">poolSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary">DatabaseAutonomousDatabaseResourcePoolSummary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isDisabledInput`<sup>Optional</sup> <a name="isDisabledInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabledInput"></a>

```typescript
public readonly isDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `poolSizeInput`<sup>Optional</sup> <a name="poolSizeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSizeInput"></a>

```typescript
public readonly poolSizeInput: number;
```

- *Type:* number

---

##### `isDisabled`<sup>Required</sup> <a name="isDisabled" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.isDisabled"></a>

```typescript
public readonly isDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `poolSize`<sup>Required</sup> <a name="poolSize" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.poolSize"></a>

```typescript
public readonly poolSize: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummaryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseAutonomousDatabaseResourcePoolSummary;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseResourcePoolSummary">DatabaseAutonomousDatabaseResourcePoolSummary</a>

---


### DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference <a name="DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek">DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek">DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek</a>

---


### DatabaseAutonomousDatabaseScheduledOperationsList <a name="DatabaseAutonomousDatabaseScheduledOperationsList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.get"></a>

```typescript
public get(index: number): DatabaseAutonomousDatabaseScheduledOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations">DatabaseAutonomousDatabaseScheduledOperations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseAutonomousDatabaseScheduledOperations[];
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations">DatabaseAutonomousDatabaseScheduledOperations</a>[]

---


### DatabaseAutonomousDatabaseScheduledOperationsOutputReference <a name="DatabaseAutonomousDatabaseScheduledOperationsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.putDayOfWeek">putDayOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.resetScheduledStartTime">resetScheduledStartTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.resetScheduledStopTime">resetScheduledStopTime</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDayOfWeek` <a name="putDayOfWeek" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.putDayOfWeek"></a>

```typescript
public putDayOfWeek(value: DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek): void
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.putDayOfWeek.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek">DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek</a>

---

##### `resetScheduledStartTime` <a name="resetScheduledStartTime" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.resetScheduledStartTime"></a>

```typescript
public resetScheduledStartTime(): void
```

##### `resetScheduledStopTime` <a name="resetScheduledStopTime" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.resetScheduledStopTime"></a>

```typescript
public resetScheduledStopTime(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference">DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek">DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTimeInput">scheduledStartTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTimeInput">scheduledStopTimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTime">scheduledStartTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTime">scheduledStopTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations">DatabaseAutonomousDatabaseScheduledOperations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference">DatabaseAutonomousDatabaseScheduledOperationsDayOfWeekOutputReference</a>

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.dayOfWeekInput"></a>

```typescript
public readonly dayOfWeekInput: DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek">DatabaseAutonomousDatabaseScheduledOperationsDayOfWeek</a>

---

##### `scheduledStartTimeInput`<sup>Optional</sup> <a name="scheduledStartTimeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTimeInput"></a>

```typescript
public readonly scheduledStartTimeInput: string;
```

- *Type:* string

---

##### `scheduledStopTimeInput`<sup>Optional</sup> <a name="scheduledStopTimeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTimeInput"></a>

```typescript
public readonly scheduledStopTimeInput: string;
```

- *Type:* string

---

##### `scheduledStartTime`<sup>Required</sup> <a name="scheduledStartTime" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStartTime"></a>

```typescript
public readonly scheduledStartTime: string;
```

- *Type:* string

---

##### `scheduledStopTime`<sup>Required</sup> <a name="scheduledStopTime" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.scheduledStopTime"></a>

```typescript
public readonly scheduledStopTime: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseAutonomousDatabaseScheduledOperations;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseScheduledOperations">DatabaseAutonomousDatabaseScheduledOperations</a>

---


### DatabaseAutonomousDatabaseStandbyDbList <a name="DatabaseAutonomousDatabaseStandbyDbList" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.get"></a>

```typescript
public get(index: number): DatabaseAutonomousDatabaseStandbyDbOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DatabaseAutonomousDatabaseStandbyDbOutputReference <a name="DatabaseAutonomousDatabaseStandbyDbOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.lagTimeInSeconds">lagTimeInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.timeDataGuardRoleChanged">timeDataGuardRoleChanged</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.timeDisasterRecoveryRoleChanged">timeDisasterRecoveryRoleChanged</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDb">DatabaseAutonomousDatabaseStandbyDb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.availabilityDomain"></a>

```typescript
public readonly availabilityDomain: string;
```

- *Type:* string

---

##### `lagTimeInSeconds`<sup>Required</sup> <a name="lagTimeInSeconds" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.lagTimeInSeconds"></a>

```typescript
public readonly lagTimeInSeconds: number;
```

- *Type:* number

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.lifecycleDetails"></a>

```typescript
public readonly lifecycleDetails: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeDataGuardRoleChanged`<sup>Required</sup> <a name="timeDataGuardRoleChanged" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.timeDataGuardRoleChanged"></a>

```typescript
public readonly timeDataGuardRoleChanged: string;
```

- *Type:* string

---

##### `timeDisasterRecoveryRoleChanged`<sup>Required</sup> <a name="timeDisasterRecoveryRoleChanged" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.timeDisasterRecoveryRoleChanged"></a>

```typescript
public readonly timeDisasterRecoveryRoleChanged: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDbOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DatabaseAutonomousDatabaseStandbyDb;
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseStandbyDb">DatabaseAutonomousDatabaseStandbyDb</a>

---


### DatabaseAutonomousDatabaseTimeoutsOutputReference <a name="DatabaseAutonomousDatabaseTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.Initializer"></a>

```typescript
import { databaseAutonomousDatabase } from 'rhizo-co-terraform-provider-oci'

new databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts">DatabaseAutonomousDatabaseTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatabaseAutonomousDatabaseTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabase.DatabaseAutonomousDatabaseTimeouts">DatabaseAutonomousDatabaseTimeouts</a>

---



