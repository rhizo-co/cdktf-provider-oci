# `databaseDbSystemsUpgrade` Submodule <a name="`databaseDbSystemsUpgrade` Submodule" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseDbSystemsUpgrade <a name="DatabaseDbSystemsUpgrade" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade oci_database_db_systems_upgrade}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_systems_upgrade.DatabaseDbSystemsUpgrade;

DatabaseDbSystemsUpgrade.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .action(java.lang.String)
    .dbSystemId(java.lang.String)
//  .id(java.lang.String)
//  .isSnapshotRetentionDaysForceUpdated(java.lang.Boolean)
//  .isSnapshotRetentionDaysForceUpdated(IResolvable)
//  .newGiVersion(java.lang.String)
//  .newOsVersion(java.lang.String)
//  .snapshotRetentionPeriodInDays(java.lang.Number)
//  .timeouts(DatabaseDbSystemsUpgradeTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#action DatabaseDbSystemsUpgrade#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#db_system_id DatabaseDbSystemsUpgrade#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#id DatabaseDbSystemsUpgrade#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.isSnapshotRetentionDaysForceUpdated">isSnapshotRetentionDaysForceUpdated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#is_snapshot_retention_days_force_updated DatabaseDbSystemsUpgrade#is_snapshot_retention_days_force_updated}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.newGiVersion">newGiVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#new_gi_version DatabaseDbSystemsUpgrade#new_gi_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.newOsVersion">newOsVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#new_os_version DatabaseDbSystemsUpgrade#new_os_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.snapshotRetentionPeriodInDays">snapshotRetentionPeriodInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#snapshot_retention_period_in_days DatabaseDbSystemsUpgrade#snapshot_retention_period_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts">DatabaseDbSystemsUpgradeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.action"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#action DatabaseDbSystemsUpgrade#action}.

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.dbSystemId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#db_system_id DatabaseDbSystemsUpgrade#db_system_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#id DatabaseDbSystemsUpgrade#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isSnapshotRetentionDaysForceUpdated`<sup>Optional</sup> <a name="isSnapshotRetentionDaysForceUpdated" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.isSnapshotRetentionDaysForceUpdated"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#is_snapshot_retention_days_force_updated DatabaseDbSystemsUpgrade#is_snapshot_retention_days_force_updated}.

---

##### `newGiVersion`<sup>Optional</sup> <a name="newGiVersion" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.newGiVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#new_gi_version DatabaseDbSystemsUpgrade#new_gi_version}.

---

##### `newOsVersion`<sup>Optional</sup> <a name="newOsVersion" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.newOsVersion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#new_os_version DatabaseDbSystemsUpgrade#new_os_version}.

---

##### `snapshotRetentionPeriodInDays`<sup>Optional</sup> <a name="snapshotRetentionPeriodInDays" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.snapshotRetentionPeriodInDays"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#snapshot_retention_period_in_days DatabaseDbSystemsUpgrade#snapshot_retention_period_in_days}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts">DatabaseDbSystemsUpgradeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#timeouts DatabaseDbSystemsUpgrade#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetIsSnapshotRetentionDaysForceUpdated">resetIsSnapshotRetentionDaysForceUpdated</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetNewGiVersion">resetNewGiVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetNewOsVersion">resetNewOsVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetSnapshotRetentionPeriodInDays">resetSnapshotRetentionPeriodInDays</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.putTimeouts"></a>

```java
public void putTimeouts(DatabaseDbSystemsUpgradeTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts">DatabaseDbSystemsUpgradeTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetId"></a>

```java
public void resetId()
```

##### `resetIsSnapshotRetentionDaysForceUpdated` <a name="resetIsSnapshotRetentionDaysForceUpdated" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetIsSnapshotRetentionDaysForceUpdated"></a>

```java
public void resetIsSnapshotRetentionDaysForceUpdated()
```

##### `resetNewGiVersion` <a name="resetNewGiVersion" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetNewGiVersion"></a>

```java
public void resetNewGiVersion()
```

##### `resetNewOsVersion` <a name="resetNewOsVersion" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetNewOsVersion"></a>

```java
public void resetNewOsVersion()
```

##### `resetSnapshotRetentionPeriodInDays` <a name="resetSnapshotRetentionPeriodInDays" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetSnapshotRetentionPeriodInDays"></a>

```java
public void resetSnapshotRetentionPeriodInDays()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseDbSystemsUpgrade resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_systems_upgrade.DatabaseDbSystemsUpgrade;

DatabaseDbSystemsUpgrade.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_systems_upgrade.DatabaseDbSystemsUpgrade;

DatabaseDbSystemsUpgrade.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_systems_upgrade.DatabaseDbSystemsUpgrade;

DatabaseDbSystemsUpgrade.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_systems_upgrade.DatabaseDbSystemsUpgrade;

DatabaseDbSystemsUpgrade.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseDbSystemsUpgrade.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseDbSystemsUpgrade resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseDbSystemsUpgrade to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseDbSystemsUpgrade that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseDbSystemsUpgrade to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.backupNetworkNsgIds">backupNetworkNsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.backupSubnetId">backupSubnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.databaseEdition">databaseEdition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dataStoragePercentage">dataStoragePercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dataStorageSizeInGb">dataStorageSizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dbSystemOptions">dbSystemOptions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList">DatabaseDbSystemsUpgradeDbSystemOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.diskRedundancy">diskRedundancy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.faultDomains">faultDomains</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.iormConfigCache">iormConfigCache</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList">DatabaseDbSystemsUpgradeIormConfigCacheList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.lastMaintenanceRunId">lastMaintenanceRunId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.lastPatchHistoryEntryId">lastPatchHistoryEntryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.listenerPort">listenerPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList">DatabaseDbSystemsUpgradeMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.nextMaintenanceRunId">nextMaintenanceRunId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.pointInTimeDataDiskCloneTimestamp">pointInTimeDataDiskCloneTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.recoStorageSizeInGb">recoStorageSizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.scanDnsName">scanDnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.scanDnsRecordId">scanDnsRecordId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.scanIpIds">scanIpIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.sourceDbSystemId">sourceDbSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.sparseDiskgroup">sparseDiskgroup</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.sshPublicKeys">sshPublicKeys</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference">DatabaseDbSystemsUpgradeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.vipIds">vipIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dbSystemIdInput">dbSystemIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.isSnapshotRetentionDaysForceUpdatedInput">isSnapshotRetentionDaysForceUpdatedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.newGiVersionInput">newGiVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.newOsVersionInput">newOsVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.snapshotRetentionPeriodInDaysInput">snapshotRetentionPeriodInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts">DatabaseDbSystemsUpgradeTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.isSnapshotRetentionDaysForceUpdated">isSnapshotRetentionDaysForceUpdated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.newGiVersion">newGiVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.newOsVersion">newOsVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.snapshotRetentionPeriodInDays">snapshotRetentionPeriodInDays</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `backupNetworkNsgIds`<sup>Required</sup> <a name="backupNetworkNsgIds" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.backupNetworkNsgIds"></a>

```java
public java.util.List<java.lang.String> getBackupNetworkNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `backupSubnetId`<sup>Required</sup> <a name="backupSubnetId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.backupSubnetId"></a>

```java
public java.lang.String getBackupSubnetId();
```

- *Type:* java.lang.String

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.cpuCoreCount"></a>

```java
public java.lang.Number getCpuCoreCount();
```

- *Type:* java.lang.Number

---

##### `databaseEdition`<sup>Required</sup> <a name="databaseEdition" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.databaseEdition"></a>

```java
public java.lang.String getDatabaseEdition();
```

- *Type:* java.lang.String

---

##### `dataStoragePercentage`<sup>Required</sup> <a name="dataStoragePercentage" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dataStoragePercentage"></a>

```java
public java.lang.Number getDataStoragePercentage();
```

- *Type:* java.lang.Number

---

##### `dataStorageSizeInGb`<sup>Required</sup> <a name="dataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dataStorageSizeInGb"></a>

```java
public java.lang.Number getDataStorageSizeInGb();
```

- *Type:* java.lang.Number

---

##### `dbSystemOptions`<sup>Required</sup> <a name="dbSystemOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dbSystemOptions"></a>

```java
public DatabaseDbSystemsUpgradeDbSystemOptionsList getDbSystemOptions();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList">DatabaseDbSystemsUpgradeDbSystemOptionsList</a>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `diskRedundancy`<sup>Required</sup> <a name="diskRedundancy" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.diskRedundancy"></a>

```java
public java.lang.String getDiskRedundancy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `faultDomains`<sup>Required</sup> <a name="faultDomains" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.faultDomains"></a>

```java
public java.util.List<java.lang.String> getFaultDomains();
```

- *Type:* java.util.List<java.lang.String>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `iormConfigCache`<sup>Required</sup> <a name="iormConfigCache" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.iormConfigCache"></a>

```java
public DatabaseDbSystemsUpgradeIormConfigCacheList getIormConfigCache();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList">DatabaseDbSystemsUpgradeIormConfigCacheList</a>

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `lastMaintenanceRunId`<sup>Required</sup> <a name="lastMaintenanceRunId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.lastMaintenanceRunId"></a>

```java
public java.lang.String getLastMaintenanceRunId();
```

- *Type:* java.lang.String

---

##### `lastPatchHistoryEntryId`<sup>Required</sup> <a name="lastPatchHistoryEntryId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.lastPatchHistoryEntryId"></a>

```java
public java.lang.String getLastPatchHistoryEntryId();
```

- *Type:* java.lang.String

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `listenerPort`<sup>Required</sup> <a name="listenerPort" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.listenerPort"></a>

```java
public java.lang.Number getListenerPort();
```

- *Type:* java.lang.Number

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.maintenanceWindow"></a>

```java
public DatabaseDbSystemsUpgradeMaintenanceWindowList getMaintenanceWindow();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList">DatabaseDbSystemsUpgradeMaintenanceWindowList</a>

---

##### `nextMaintenanceRunId`<sup>Required</sup> <a name="nextMaintenanceRunId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.nextMaintenanceRunId"></a>

```java
public java.lang.String getNextMaintenanceRunId();
```

- *Type:* java.lang.String

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `pointInTimeDataDiskCloneTimestamp`<sup>Required</sup> <a name="pointInTimeDataDiskCloneTimestamp" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.pointInTimeDataDiskCloneTimestamp"></a>

```java
public java.lang.String getPointInTimeDataDiskCloneTimestamp();
```

- *Type:* java.lang.String

---

##### `recoStorageSizeInGb`<sup>Required</sup> <a name="recoStorageSizeInGb" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.recoStorageSizeInGb"></a>

```java
public java.lang.Number getRecoStorageSizeInGb();
```

- *Type:* java.lang.Number

---

##### `scanDnsName`<sup>Required</sup> <a name="scanDnsName" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.scanDnsName"></a>

```java
public java.lang.String getScanDnsName();
```

- *Type:* java.lang.String

---

##### `scanDnsRecordId`<sup>Required</sup> <a name="scanDnsRecordId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.scanDnsRecordId"></a>

```java
public java.lang.String getScanDnsRecordId();
```

- *Type:* java.lang.String

---

##### `scanIpIds`<sup>Required</sup> <a name="scanIpIds" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.scanIpIds"></a>

```java
public java.util.List<java.lang.String> getScanIpIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `sourceDbSystemId`<sup>Required</sup> <a name="sourceDbSystemId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.sourceDbSystemId"></a>

```java
public java.lang.String getSourceDbSystemId();
```

- *Type:* java.lang.String

---

##### `sparseDiskgroup`<sup>Required</sup> <a name="sparseDiskgroup" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.sparseDiskgroup"></a>

```java
public IResolvable getSparseDiskgroup();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `sshPublicKeys`<sup>Required</sup> <a name="sshPublicKeys" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.sshPublicKeys"></a>

```java
public java.util.List<java.lang.String> getSshPublicKeys();
```

- *Type:* java.util.List<java.lang.String>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.timeouts"></a>

```java
public DatabaseDbSystemsUpgradeTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference">DatabaseDbSystemsUpgradeTimeoutsOutputReference</a>

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `vipIds`<sup>Required</sup> <a name="vipIds" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.vipIds"></a>

```java
public java.util.List<java.lang.String> getVipIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `dbSystemIdInput`<sup>Optional</sup> <a name="dbSystemIdInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dbSystemIdInput"></a>

```java
public java.lang.String getDbSystemIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isSnapshotRetentionDaysForceUpdatedInput`<sup>Optional</sup> <a name="isSnapshotRetentionDaysForceUpdatedInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.isSnapshotRetentionDaysForceUpdatedInput"></a>

```java
public java.lang.Object getIsSnapshotRetentionDaysForceUpdatedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `newGiVersionInput`<sup>Optional</sup> <a name="newGiVersionInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.newGiVersionInput"></a>

```java
public java.lang.String getNewGiVersionInput();
```

- *Type:* java.lang.String

---

##### `newOsVersionInput`<sup>Optional</sup> <a name="newOsVersionInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.newOsVersionInput"></a>

```java
public java.lang.String getNewOsVersionInput();
```

- *Type:* java.lang.String

---

##### `snapshotRetentionPeriodInDaysInput`<sup>Optional</sup> <a name="snapshotRetentionPeriodInDaysInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.snapshotRetentionPeriodInDaysInput"></a>

```java
public java.lang.Number getSnapshotRetentionPeriodInDaysInput();
```

- *Type:* java.lang.Number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts">DatabaseDbSystemsUpgradeTimeouts</a>

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dbSystemId"></a>

```java
public java.lang.String getDbSystemId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isSnapshotRetentionDaysForceUpdated`<sup>Required</sup> <a name="isSnapshotRetentionDaysForceUpdated" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.isSnapshotRetentionDaysForceUpdated"></a>

```java
public java.lang.Object getIsSnapshotRetentionDaysForceUpdated();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `newGiVersion`<sup>Required</sup> <a name="newGiVersion" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.newGiVersion"></a>

```java
public java.lang.String getNewGiVersion();
```

- *Type:* java.lang.String

---

##### `newOsVersion`<sup>Required</sup> <a name="newOsVersion" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.newOsVersion"></a>

```java
public java.lang.String getNewOsVersion();
```

- *Type:* java.lang.String

---

##### `snapshotRetentionPeriodInDays`<sup>Required</sup> <a name="snapshotRetentionPeriodInDays" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.snapshotRetentionPeriodInDays"></a>

```java
public java.lang.Number getSnapshotRetentionPeriodInDays();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseDbSystemsUpgradeConfig <a name="DatabaseDbSystemsUpgradeConfig" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_systems_upgrade.DatabaseDbSystemsUpgradeConfig;

DatabaseDbSystemsUpgradeConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .action(java.lang.String)
    .dbSystemId(java.lang.String)
//  .id(java.lang.String)
//  .isSnapshotRetentionDaysForceUpdated(java.lang.Boolean)
//  .isSnapshotRetentionDaysForceUpdated(IResolvable)
//  .newGiVersion(java.lang.String)
//  .newOsVersion(java.lang.String)
//  .snapshotRetentionPeriodInDays(java.lang.Number)
//  .timeouts(DatabaseDbSystemsUpgradeTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.action">action</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#action DatabaseDbSystemsUpgrade#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.dbSystemId">dbSystemId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#db_system_id DatabaseDbSystemsUpgrade#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#id DatabaseDbSystemsUpgrade#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.isSnapshotRetentionDaysForceUpdated">isSnapshotRetentionDaysForceUpdated</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#is_snapshot_retention_days_force_updated DatabaseDbSystemsUpgrade#is_snapshot_retention_days_force_updated}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.newGiVersion">newGiVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#new_gi_version DatabaseDbSystemsUpgrade#new_gi_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.newOsVersion">newOsVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#new_os_version DatabaseDbSystemsUpgrade#new_os_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.snapshotRetentionPeriodInDays">snapshotRetentionPeriodInDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#snapshot_retention_period_in_days DatabaseDbSystemsUpgrade#snapshot_retention_period_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts">DatabaseDbSystemsUpgradeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#action DatabaseDbSystemsUpgrade#action}.

---

##### `dbSystemId`<sup>Required</sup> <a name="dbSystemId" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.dbSystemId"></a>

```java
public java.lang.String getDbSystemId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#db_system_id DatabaseDbSystemsUpgrade#db_system_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#id DatabaseDbSystemsUpgrade#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isSnapshotRetentionDaysForceUpdated`<sup>Optional</sup> <a name="isSnapshotRetentionDaysForceUpdated" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.isSnapshotRetentionDaysForceUpdated"></a>

```java
public java.lang.Object getIsSnapshotRetentionDaysForceUpdated();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#is_snapshot_retention_days_force_updated DatabaseDbSystemsUpgrade#is_snapshot_retention_days_force_updated}.

---

##### `newGiVersion`<sup>Optional</sup> <a name="newGiVersion" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.newGiVersion"></a>

```java
public java.lang.String getNewGiVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#new_gi_version DatabaseDbSystemsUpgrade#new_gi_version}.

---

##### `newOsVersion`<sup>Optional</sup> <a name="newOsVersion" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.newOsVersion"></a>

```java
public java.lang.String getNewOsVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#new_os_version DatabaseDbSystemsUpgrade#new_os_version}.

---

##### `snapshotRetentionPeriodInDays`<sup>Optional</sup> <a name="snapshotRetentionPeriodInDays" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.snapshotRetentionPeriodInDays"></a>

```java
public java.lang.Number getSnapshotRetentionPeriodInDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#snapshot_retention_period_in_days DatabaseDbSystemsUpgrade#snapshot_retention_period_in_days}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.timeouts"></a>

```java
public DatabaseDbSystemsUpgradeTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts">DatabaseDbSystemsUpgradeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#timeouts DatabaseDbSystemsUpgrade#timeouts}

---

### DatabaseDbSystemsUpgradeDbSystemOptions <a name="DatabaseDbSystemsUpgradeDbSystemOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptions.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_systems_upgrade.DatabaseDbSystemsUpgradeDbSystemOptions;

DatabaseDbSystemsUpgradeDbSystemOptions.builder()
    .build();
```


### DatabaseDbSystemsUpgradeIormConfigCache <a name="DatabaseDbSystemsUpgradeIormConfigCache" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCache"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCache.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_systems_upgrade.DatabaseDbSystemsUpgradeIormConfigCache;

DatabaseDbSystemsUpgradeIormConfigCache.builder()
    .build();
```


### DatabaseDbSystemsUpgradeIormConfigCacheDbPlans <a name="DatabaseDbSystemsUpgradeIormConfigCacheDbPlans" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlans.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_systems_upgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlans;

DatabaseDbSystemsUpgradeIormConfigCacheDbPlans.builder()
    .build();
```


### DatabaseDbSystemsUpgradeMaintenanceWindow <a name="DatabaseDbSystemsUpgradeMaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_systems_upgrade.DatabaseDbSystemsUpgradeMaintenanceWindow;

DatabaseDbSystemsUpgradeMaintenanceWindow.builder()
    .build();
```


### DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek <a name="DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_systems_upgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek;

DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek.builder()
    .build();
```


### DatabaseDbSystemsUpgradeMaintenanceWindowMonths <a name="DatabaseDbSystemsUpgradeMaintenanceWindowMonths" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonths.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_systems_upgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonths;

DatabaseDbSystemsUpgradeMaintenanceWindowMonths.builder()
    .build();
```


### DatabaseDbSystemsUpgradeTimeouts <a name="DatabaseDbSystemsUpgradeTimeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_systems_upgrade.DatabaseDbSystemsUpgradeTimeouts;

DatabaseDbSystemsUpgradeTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#create DatabaseDbSystemsUpgrade#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#delete DatabaseDbSystemsUpgrade#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#update DatabaseDbSystemsUpgrade#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#create DatabaseDbSystemsUpgrade#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#delete DatabaseDbSystemsUpgrade#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#update DatabaseDbSystemsUpgrade#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseDbSystemsUpgradeDbSystemOptionsList <a name="DatabaseDbSystemsUpgradeDbSystemOptionsList" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_systems_upgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList;

new DatabaseDbSystemsUpgradeDbSystemOptionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.get"></a>

```java
public DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference <a name="DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_systems_upgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference;

new DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.property.storageManagement">storageManagement</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptions">DatabaseDbSystemsUpgradeDbSystemOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `storageManagement`<sup>Required</sup> <a name="storageManagement" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.property.storageManagement"></a>

```java
public java.lang.String getStorageManagement();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.property.internalValue"></a>

```java
public DatabaseDbSystemsUpgradeDbSystemOptions getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptions">DatabaseDbSystemsUpgradeDbSystemOptions</a>

---


### DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList <a name="DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_systems_upgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList;

new DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.get"></a>

```java
public DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference <a name="DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_systems_upgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference;

new DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.dbName">dbName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.flashCacheLimit">flashCacheLimit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.share">share</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlans">DatabaseDbSystemsUpgradeIormConfigCacheDbPlans</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dbName`<sup>Required</sup> <a name="dbName" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.dbName"></a>

```java
public java.lang.String getDbName();
```

- *Type:* java.lang.String

---

##### `flashCacheLimit`<sup>Required</sup> <a name="flashCacheLimit" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.flashCacheLimit"></a>

```java
public java.lang.String getFlashCacheLimit();
```

- *Type:* java.lang.String

---

##### `share`<sup>Required</sup> <a name="share" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.share"></a>

```java
public java.lang.Number getShare();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.internalValue"></a>

```java
public DatabaseDbSystemsUpgradeIormConfigCacheDbPlans getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlans">DatabaseDbSystemsUpgradeIormConfigCacheDbPlans</a>

---


### DatabaseDbSystemsUpgradeIormConfigCacheList <a name="DatabaseDbSystemsUpgradeIormConfigCacheList" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_systems_upgrade.DatabaseDbSystemsUpgradeIormConfigCacheList;

new DatabaseDbSystemsUpgradeIormConfigCacheList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.get"></a>

```java
public DatabaseDbSystemsUpgradeIormConfigCacheOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseDbSystemsUpgradeIormConfigCacheOutputReference <a name="DatabaseDbSystemsUpgradeIormConfigCacheOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_systems_upgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference;

new DatabaseDbSystemsUpgradeIormConfigCacheOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.dbPlans">dbPlans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList">DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.objective">objective</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCache">DatabaseDbSystemsUpgradeIormConfigCache</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dbPlans`<sup>Required</sup> <a name="dbPlans" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.dbPlans"></a>

```java
public DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList getDbPlans();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList">DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList</a>

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `objective`<sup>Required</sup> <a name="objective" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.objective"></a>

```java
public java.lang.String getObjective();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.internalValue"></a>

```java
public DatabaseDbSystemsUpgradeIormConfigCache getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCache">DatabaseDbSystemsUpgradeIormConfigCache</a>

---


### DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList <a name="DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_systems_upgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList;

new DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.get"></a>

```java
public DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference <a name="DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_systems_upgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference;

new DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek">DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.property.internalValue"></a>

```java
public DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek">DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek</a>

---


### DatabaseDbSystemsUpgradeMaintenanceWindowList <a name="DatabaseDbSystemsUpgradeMaintenanceWindowList" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_systems_upgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList;

new DatabaseDbSystemsUpgradeMaintenanceWindowList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.get"></a>

```java
public DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList <a name="DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_systems_upgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList;

new DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.get"></a>

```java
public DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference <a name="DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_systems_upgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference;

new DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonths">DatabaseDbSystemsUpgradeMaintenanceWindowMonths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.property.internalValue"></a>

```java
public DatabaseDbSystemsUpgradeMaintenanceWindowMonths getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonths">DatabaseDbSystemsUpgradeMaintenanceWindowMonths</a>

---


### DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference <a name="DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_systems_upgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference;

new DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList">DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.hoursOfDay">hoursOfDay</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.leadTimeInWeeks">leadTimeInWeeks</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.months">months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList">DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.preference">preference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.weeksOfMonth">weeksOfMonth</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindow">DatabaseDbSystemsUpgradeMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```java
public DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList getDaysOfWeek();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList">DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList</a>

---

##### `hoursOfDay`<sup>Required</sup> <a name="hoursOfDay" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```java
public java.util.List<java.lang.Number> getHoursOfDay();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `leadTimeInWeeks`<sup>Required</sup> <a name="leadTimeInWeeks" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```java
public java.lang.Number getLeadTimeInWeeks();
```

- *Type:* java.lang.Number

---

##### `months`<sup>Required</sup> <a name="months" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.months"></a>

```java
public DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList getMonths();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList">DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList</a>

---

##### `preference`<sup>Required</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.preference"></a>

```java
public java.lang.String getPreference();
```

- *Type:* java.lang.String

---

##### `weeksOfMonth`<sup>Required</sup> <a name="weeksOfMonth" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```java
public java.util.List<java.lang.Number> getWeeksOfMonth();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.internalValue"></a>

```java
public DatabaseDbSystemsUpgradeMaintenanceWindow getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindow">DatabaseDbSystemsUpgradeMaintenanceWindow</a>

---


### DatabaseDbSystemsUpgradeTimeoutsOutputReference <a name="DatabaseDbSystemsUpgradeTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_db_systems_upgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference;

new DatabaseDbSystemsUpgradeTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts">DatabaseDbSystemsUpgradeTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts">DatabaseDbSystemsUpgradeTimeouts</a>

---



