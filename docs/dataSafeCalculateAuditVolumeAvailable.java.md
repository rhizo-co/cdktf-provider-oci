# `dataSafeCalculateAuditVolumeAvailable` Submodule <a name="`dataSafeCalculateAuditVolumeAvailable` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeCalculateAuditVolumeAvailable <a name="DataSafeCalculateAuditVolumeAvailable" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available oci_data_safe_calculate_audit_volume_available}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_calculate_audit_volume_available.DataSafeCalculateAuditVolumeAvailable;

DataSafeCalculateAuditVolumeAvailable.Builder.create(Construct scope, java.lang.String id)
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
    .auditProfileId(java.lang.String)
//  .auditCollectionStartTime(java.lang.String)
//  .databaseUniqueName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataSafeCalculateAuditVolumeAvailableTimeouts)
//  .trailLocations(java.util.List<java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.auditProfileId">auditProfileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#audit_profile_id DataSafeCalculateAuditVolumeAvailable#audit_profile_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.auditCollectionStartTime">auditCollectionStartTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#audit_collection_start_time DataSafeCalculateAuditVolumeAvailable#audit_collection_start_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.databaseUniqueName">databaseUniqueName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#database_unique_name DataSafeCalculateAuditVolumeAvailable#database_unique_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#id DataSafeCalculateAuditVolumeAvailable#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeouts">DataSafeCalculateAuditVolumeAvailableTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.trailLocations">trailLocations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#trail_locations DataSafeCalculateAuditVolumeAvailable#trail_locations}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `auditProfileId`<sup>Required</sup> <a name="auditProfileId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.auditProfileId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#audit_profile_id DataSafeCalculateAuditVolumeAvailable#audit_profile_id}.

---

##### `auditCollectionStartTime`<sup>Optional</sup> <a name="auditCollectionStartTime" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.auditCollectionStartTime"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#audit_collection_start_time DataSafeCalculateAuditVolumeAvailable#audit_collection_start_time}.

---

##### `databaseUniqueName`<sup>Optional</sup> <a name="databaseUniqueName" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.databaseUniqueName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#database_unique_name DataSafeCalculateAuditVolumeAvailable#database_unique_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#id DataSafeCalculateAuditVolumeAvailable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeouts">DataSafeCalculateAuditVolumeAvailableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#timeouts DataSafeCalculateAuditVolumeAvailable#timeouts}

---

##### `trailLocations`<sup>Optional</sup> <a name="trailLocations" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.Initializer.parameter.trailLocations"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#trail_locations DataSafeCalculateAuditVolumeAvailable#trail_locations}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.resetAuditCollectionStartTime">resetAuditCollectionStartTime</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.resetDatabaseUniqueName">resetDatabaseUniqueName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.resetTrailLocations">resetTrailLocations</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.putTimeouts"></a>

```java
public void putTimeouts(DataSafeCalculateAuditVolumeAvailableTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeouts">DataSafeCalculateAuditVolumeAvailableTimeouts</a>

---

##### `resetAuditCollectionStartTime` <a name="resetAuditCollectionStartTime" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.resetAuditCollectionStartTime"></a>

```java
public void resetAuditCollectionStartTime()
```

##### `resetDatabaseUniqueName` <a name="resetDatabaseUniqueName" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.resetDatabaseUniqueName"></a>

```java
public void resetDatabaseUniqueName()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTrailLocations` <a name="resetTrailLocations" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.resetTrailLocations"></a>

```java
public void resetTrailLocations()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeCalculateAuditVolumeAvailable resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_calculate_audit_volume_available.DataSafeCalculateAuditVolumeAvailable;

DataSafeCalculateAuditVolumeAvailable.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_calculate_audit_volume_available.DataSafeCalculateAuditVolumeAvailable;

DataSafeCalculateAuditVolumeAvailable.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_calculate_audit_volume_available.DataSafeCalculateAuditVolumeAvailable;

DataSafeCalculateAuditVolumeAvailable.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_calculate_audit_volume_available.DataSafeCalculateAuditVolumeAvailable;

DataSafeCalculateAuditVolumeAvailable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataSafeCalculateAuditVolumeAvailable.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataSafeCalculateAuditVolumeAvailable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataSafeCalculateAuditVolumeAvailable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataSafeCalculateAuditVolumeAvailable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeCalculateAuditVolumeAvailable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.availableAuditVolumes">availableAuditVolumes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList">DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference">DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.auditCollectionStartTimeInput">auditCollectionStartTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.auditProfileIdInput">auditProfileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.databaseUniqueNameInput">databaseUniqueNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeouts">DataSafeCalculateAuditVolumeAvailableTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.trailLocationsInput">trailLocationsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.auditCollectionStartTime">auditCollectionStartTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.auditProfileId">auditProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.databaseUniqueName">databaseUniqueName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.trailLocations">trailLocations</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availableAuditVolumes`<sup>Required</sup> <a name="availableAuditVolumes" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.availableAuditVolumes"></a>

```java
public DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList getAvailableAuditVolumes();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList">DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.timeouts"></a>

```java
public DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference">DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference</a>

---

##### `auditCollectionStartTimeInput`<sup>Optional</sup> <a name="auditCollectionStartTimeInput" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.auditCollectionStartTimeInput"></a>

```java
public java.lang.String getAuditCollectionStartTimeInput();
```

- *Type:* java.lang.String

---

##### `auditProfileIdInput`<sup>Optional</sup> <a name="auditProfileIdInput" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.auditProfileIdInput"></a>

```java
public java.lang.String getAuditProfileIdInput();
```

- *Type:* java.lang.String

---

##### `databaseUniqueNameInput`<sup>Optional</sup> <a name="databaseUniqueNameInput" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.databaseUniqueNameInput"></a>

```java
public java.lang.String getDatabaseUniqueNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeouts">DataSafeCalculateAuditVolumeAvailableTimeouts</a>

---

##### `trailLocationsInput`<sup>Optional</sup> <a name="trailLocationsInput" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.trailLocationsInput"></a>

```java
public java.util.List<java.lang.String> getTrailLocationsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `auditCollectionStartTime`<sup>Required</sup> <a name="auditCollectionStartTime" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.auditCollectionStartTime"></a>

```java
public java.lang.String getAuditCollectionStartTime();
```

- *Type:* java.lang.String

---

##### `auditProfileId`<sup>Required</sup> <a name="auditProfileId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.auditProfileId"></a>

```java
public java.lang.String getAuditProfileId();
```

- *Type:* java.lang.String

---

##### `databaseUniqueName`<sup>Required</sup> <a name="databaseUniqueName" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.databaseUniqueName"></a>

```java
public java.lang.String getDatabaseUniqueName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `trailLocations`<sup>Required</sup> <a name="trailLocations" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.trailLocations"></a>

```java
public java.util.List<java.lang.String> getTrailLocations();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailable.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumes <a name="DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumes" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumes.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_calculate_audit_volume_available.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumes;

DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumes.builder()
    .build();
```


### DataSafeCalculateAuditVolumeAvailableConfig <a name="DataSafeCalculateAuditVolumeAvailableConfig" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_calculate_audit_volume_available.DataSafeCalculateAuditVolumeAvailableConfig;

DataSafeCalculateAuditVolumeAvailableConfig.builder()
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
    .auditProfileId(java.lang.String)
//  .auditCollectionStartTime(java.lang.String)
//  .databaseUniqueName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataSafeCalculateAuditVolumeAvailableTimeouts)
//  .trailLocations(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.auditProfileId">auditProfileId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#audit_profile_id DataSafeCalculateAuditVolumeAvailable#audit_profile_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.auditCollectionStartTime">auditCollectionStartTime</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#audit_collection_start_time DataSafeCalculateAuditVolumeAvailable#audit_collection_start_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.databaseUniqueName">databaseUniqueName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#database_unique_name DataSafeCalculateAuditVolumeAvailable#database_unique_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#id DataSafeCalculateAuditVolumeAvailable#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeouts">DataSafeCalculateAuditVolumeAvailableTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.trailLocations">trailLocations</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#trail_locations DataSafeCalculateAuditVolumeAvailable#trail_locations}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `auditProfileId`<sup>Required</sup> <a name="auditProfileId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.auditProfileId"></a>

```java
public java.lang.String getAuditProfileId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#audit_profile_id DataSafeCalculateAuditVolumeAvailable#audit_profile_id}.

---

##### `auditCollectionStartTime`<sup>Optional</sup> <a name="auditCollectionStartTime" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.auditCollectionStartTime"></a>

```java
public java.lang.String getAuditCollectionStartTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#audit_collection_start_time DataSafeCalculateAuditVolumeAvailable#audit_collection_start_time}.

---

##### `databaseUniqueName`<sup>Optional</sup> <a name="databaseUniqueName" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.databaseUniqueName"></a>

```java
public java.lang.String getDatabaseUniqueName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#database_unique_name DataSafeCalculateAuditVolumeAvailable#database_unique_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#id DataSafeCalculateAuditVolumeAvailable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.timeouts"></a>

```java
public DataSafeCalculateAuditVolumeAvailableTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeouts">DataSafeCalculateAuditVolumeAvailableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#timeouts DataSafeCalculateAuditVolumeAvailable#timeouts}

---

##### `trailLocations`<sup>Optional</sup> <a name="trailLocations" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableConfig.property.trailLocations"></a>

```java
public java.util.List<java.lang.String> getTrailLocations();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#trail_locations DataSafeCalculateAuditVolumeAvailable#trail_locations}.

---

### DataSafeCalculateAuditVolumeAvailableTimeouts <a name="DataSafeCalculateAuditVolumeAvailableTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_calculate_audit_volume_available.DataSafeCalculateAuditVolumeAvailableTimeouts;

DataSafeCalculateAuditVolumeAvailableTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#create DataSafeCalculateAuditVolumeAvailable#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#delete DataSafeCalculateAuditVolumeAvailable#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#update DataSafeCalculateAuditVolumeAvailable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#create DataSafeCalculateAuditVolumeAvailable#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#delete DataSafeCalculateAuditVolumeAvailable#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_available#update DataSafeCalculateAuditVolumeAvailable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList <a name="DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_calculate_audit_volume_available.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList;

new DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.get"></a>

```java
public DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference <a name="DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_calculate_audit_volume_available.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference;

new DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.auditProfileId">auditProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.monthInConsideration">monthInConsideration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.trailLocation">trailLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.volume">volume</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumes">DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `auditProfileId`<sup>Required</sup> <a name="auditProfileId" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.auditProfileId"></a>

```java
public java.lang.String getAuditProfileId();
```

- *Type:* java.lang.String

---

##### `monthInConsideration`<sup>Required</sup> <a name="monthInConsideration" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.monthInConsideration"></a>

```java
public java.lang.String getMonthInConsideration();
```

- *Type:* java.lang.String

---

##### `trailLocation`<sup>Required</sup> <a name="trailLocation" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.trailLocation"></a>

```java
public java.lang.String getTrailLocation();
```

- *Type:* java.lang.String

---

##### `volume`<sup>Required</sup> <a name="volume" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.volume"></a>

```java
public java.lang.String getVolume();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumesOutputReference.property.internalValue"></a>

```java
public DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumes getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumes">DataSafeCalculateAuditVolumeAvailableAvailableAuditVolumes</a>

---


### DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference <a name="DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_safe_calculate_audit_volume_available.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference;

new DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeouts">DataSafeCalculateAuditVolumeAvailableTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeAvailable.DataSafeCalculateAuditVolumeAvailableTimeouts">DataSafeCalculateAuditVolumeAvailableTimeouts</a>

---



