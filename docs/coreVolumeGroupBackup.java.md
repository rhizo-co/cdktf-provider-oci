# `coreVolumeGroupBackup` Submodule <a name="`coreVolumeGroupBackup` Submodule" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreVolumeGroupBackup <a name="CoreVolumeGroupBackup" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup oci_core_volume_group_backup}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_volume_group_backup.CoreVolumeGroupBackup;

CoreVolumeGroupBackup.Builder.create(Construct scope, java.lang.String id)
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
//  .compartmentId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .sourceDetails(CoreVolumeGroupBackupSourceDetails)
//  .timeouts(CoreVolumeGroupBackupTimeouts)
//  .type(java.lang.String)
//  .volumeGroupId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#compartment_id CoreVolumeGroupBackup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#defined_tags CoreVolumeGroupBackup#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#display_name CoreVolumeGroupBackup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#freeform_tags CoreVolumeGroupBackup#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#id CoreVolumeGroupBackup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.sourceDetails">sourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetails">CoreVolumeGroupBackupSourceDetails</a></code> | source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeouts">CoreVolumeGroupBackupTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#type CoreVolumeGroupBackup#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.volumeGroupId">volumeGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#volume_group_id CoreVolumeGroupBackup#volume_group_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#compartment_id CoreVolumeGroupBackup#compartment_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#defined_tags CoreVolumeGroupBackup#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#display_name CoreVolumeGroupBackup#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#freeform_tags CoreVolumeGroupBackup#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#id CoreVolumeGroupBackup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sourceDetails`<sup>Optional</sup> <a name="sourceDetails" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.sourceDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetails">CoreVolumeGroupBackupSourceDetails</a>

source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#source_details CoreVolumeGroupBackup#source_details}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeouts">CoreVolumeGroupBackupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#timeouts CoreVolumeGroupBackup#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#type CoreVolumeGroupBackup#type}.

---

##### `volumeGroupId`<sup>Optional</sup> <a name="volumeGroupId" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.volumeGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#volume_group_id CoreVolumeGroupBackup#volume_group_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.putSourceDetails">putSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.resetSourceDetails">resetSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.resetType">resetType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.resetVolumeGroupId">resetVolumeGroupId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSourceDetails` <a name="putSourceDetails" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.putSourceDetails"></a>

```java
public void putSourceDetails(CoreVolumeGroupBackupSourceDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.putSourceDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetails">CoreVolumeGroupBackupSourceDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.putTimeouts"></a>

```java
public void putTimeouts(CoreVolumeGroupBackupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeouts">CoreVolumeGroupBackupTimeouts</a>

---

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.resetId"></a>

```java
public void resetId()
```

##### `resetSourceDetails` <a name="resetSourceDetails" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.resetSourceDetails"></a>

```java
public void resetSourceDetails()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetType` <a name="resetType" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.resetType"></a>

```java
public void resetType()
```

##### `resetVolumeGroupId` <a name="resetVolumeGroupId" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.resetVolumeGroupId"></a>

```java
public void resetVolumeGroupId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CoreVolumeGroupBackup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_volume_group_backup.CoreVolumeGroupBackup;

CoreVolumeGroupBackup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_volume_group_backup.CoreVolumeGroupBackup;

CoreVolumeGroupBackup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_volume_group_backup.CoreVolumeGroupBackup;

CoreVolumeGroupBackup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_volume_group_backup.CoreVolumeGroupBackup;

CoreVolumeGroupBackup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CoreVolumeGroupBackup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CoreVolumeGroupBackup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CoreVolumeGroupBackup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CoreVolumeGroupBackup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CoreVolumeGroupBackup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.expirationTime">expirationTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.sizeInGbs">sizeInGbs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.sizeInMbs">sizeInMbs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.sourceDetails">sourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference">CoreVolumeGroupBackupSourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.sourceVolumeGroupBackupId">sourceVolumeGroupBackupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference">CoreVolumeGroupBackupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.timeRequestReceived">timeRequestReceived</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.uniqueSizeInGbs">uniqueSizeInGbs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.uniqueSizeInMbs">uniqueSizeInMbs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.volumeBackupIds">volumeBackupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.sourceDetailsInput">sourceDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetails">CoreVolumeGroupBackupSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeouts">CoreVolumeGroupBackupTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.volumeGroupIdInput">volumeGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.volumeGroupId">volumeGroupId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `expirationTime`<sup>Required</sup> <a name="expirationTime" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.expirationTime"></a>

```java
public java.lang.String getExpirationTime();
```

- *Type:* java.lang.String

---

##### `sizeInGbs`<sup>Required</sup> <a name="sizeInGbs" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.sizeInGbs"></a>

```java
public java.lang.String getSizeInGbs();
```

- *Type:* java.lang.String

---

##### `sizeInMbs`<sup>Required</sup> <a name="sizeInMbs" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.sizeInMbs"></a>

```java
public java.lang.String getSizeInMbs();
```

- *Type:* java.lang.String

---

##### `sourceDetails`<sup>Required</sup> <a name="sourceDetails" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.sourceDetails"></a>

```java
public CoreVolumeGroupBackupSourceDetailsOutputReference getSourceDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference">CoreVolumeGroupBackupSourceDetailsOutputReference</a>

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

---

##### `sourceVolumeGroupBackupId`<sup>Required</sup> <a name="sourceVolumeGroupBackupId" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.sourceVolumeGroupBackupId"></a>

```java
public java.lang.String getSourceVolumeGroupBackupId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.timeouts"></a>

```java
public CoreVolumeGroupBackupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference">CoreVolumeGroupBackupTimeoutsOutputReference</a>

---

##### `timeRequestReceived`<sup>Required</sup> <a name="timeRequestReceived" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.timeRequestReceived"></a>

```java
public java.lang.String getTimeRequestReceived();
```

- *Type:* java.lang.String

---

##### `uniqueSizeInGbs`<sup>Required</sup> <a name="uniqueSizeInGbs" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.uniqueSizeInGbs"></a>

```java
public java.lang.String getUniqueSizeInGbs();
```

- *Type:* java.lang.String

---

##### `uniqueSizeInMbs`<sup>Required</sup> <a name="uniqueSizeInMbs" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.uniqueSizeInMbs"></a>

```java
public java.lang.String getUniqueSizeInMbs();
```

- *Type:* java.lang.String

---

##### `volumeBackupIds`<sup>Required</sup> <a name="volumeBackupIds" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.volumeBackupIds"></a>

```java
public java.util.List<java.lang.String> getVolumeBackupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `sourceDetailsInput`<sup>Optional</sup> <a name="sourceDetailsInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.sourceDetailsInput"></a>

```java
public CoreVolumeGroupBackupSourceDetails getSourceDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetails">CoreVolumeGroupBackupSourceDetails</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeouts">CoreVolumeGroupBackupTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `volumeGroupIdInput`<sup>Optional</sup> <a name="volumeGroupIdInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.volumeGroupIdInput"></a>

```java
public java.lang.String getVolumeGroupIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `volumeGroupId`<sup>Required</sup> <a name="volumeGroupId" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.volumeGroupId"></a>

```java
public java.lang.String getVolumeGroupId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CoreVolumeGroupBackupConfig <a name="CoreVolumeGroupBackupConfig" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_volume_group_backup.CoreVolumeGroupBackupConfig;

CoreVolumeGroupBackupConfig.builder()
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
//  .compartmentId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .sourceDetails(CoreVolumeGroupBackupSourceDetails)
//  .timeouts(CoreVolumeGroupBackupTimeouts)
//  .type(java.lang.String)
//  .volumeGroupId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#compartment_id CoreVolumeGroupBackup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#defined_tags CoreVolumeGroupBackup#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#display_name CoreVolumeGroupBackup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#freeform_tags CoreVolumeGroupBackup#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#id CoreVolumeGroupBackup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.sourceDetails">sourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetails">CoreVolumeGroupBackupSourceDetails</a></code> | source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeouts">CoreVolumeGroupBackupTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#type CoreVolumeGroupBackup#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.volumeGroupId">volumeGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#volume_group_id CoreVolumeGroupBackup#volume_group_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#compartment_id CoreVolumeGroupBackup#compartment_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#defined_tags CoreVolumeGroupBackup#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#display_name CoreVolumeGroupBackup#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#freeform_tags CoreVolumeGroupBackup#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#id CoreVolumeGroupBackup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `sourceDetails`<sup>Optional</sup> <a name="sourceDetails" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.sourceDetails"></a>

```java
public CoreVolumeGroupBackupSourceDetails getSourceDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetails">CoreVolumeGroupBackupSourceDetails</a>

source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#source_details CoreVolumeGroupBackup#source_details}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.timeouts"></a>

```java
public CoreVolumeGroupBackupTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeouts">CoreVolumeGroupBackupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#timeouts CoreVolumeGroupBackup#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#type CoreVolumeGroupBackup#type}.

---

##### `volumeGroupId`<sup>Optional</sup> <a name="volumeGroupId" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.volumeGroupId"></a>

```java
public java.lang.String getVolumeGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#volume_group_id CoreVolumeGroupBackup#volume_group_id}.

---

### CoreVolumeGroupBackupSourceDetails <a name="CoreVolumeGroupBackupSourceDetails" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_volume_group_backup.CoreVolumeGroupBackupSourceDetails;

CoreVolumeGroupBackupSourceDetails.builder()
    .region(java.lang.String)
    .volumeGroupBackupId(java.lang.String)
//  .kmsKeyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetails.property.region">region</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#region CoreVolumeGroupBackup#region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetails.property.volumeGroupBackupId">volumeGroupBackupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#volume_group_backup_id CoreVolumeGroupBackup#volume_group_backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetails.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#kms_key_id CoreVolumeGroupBackup#kms_key_id}. |

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetails.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#region CoreVolumeGroupBackup#region}.

---

##### `volumeGroupBackupId`<sup>Required</sup> <a name="volumeGroupBackupId" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetails.property.volumeGroupBackupId"></a>

```java
public java.lang.String getVolumeGroupBackupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#volume_group_backup_id CoreVolumeGroupBackup#volume_group_backup_id}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetails.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#kms_key_id CoreVolumeGroupBackup#kms_key_id}.

---

### CoreVolumeGroupBackupTimeouts <a name="CoreVolumeGroupBackupTimeouts" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_volume_group_backup.CoreVolumeGroupBackupTimeouts;

CoreVolumeGroupBackupTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#create CoreVolumeGroupBackup#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#delete CoreVolumeGroupBackup#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#update CoreVolumeGroupBackup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#create CoreVolumeGroupBackup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#delete CoreVolumeGroupBackup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#update CoreVolumeGroupBackup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreVolumeGroupBackupSourceDetailsOutputReference <a name="CoreVolumeGroupBackupSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_volume_group_backup.CoreVolumeGroupBackupSourceDetailsOutputReference;

new CoreVolumeGroupBackupSourceDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.property.volumeGroupBackupIdInput">volumeGroupBackupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.property.volumeGroupBackupId">volumeGroupBackupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetails">CoreVolumeGroupBackupSourceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `volumeGroupBackupIdInput`<sup>Optional</sup> <a name="volumeGroupBackupIdInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.property.volumeGroupBackupIdInput"></a>

```java
public java.lang.String getVolumeGroupBackupIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `volumeGroupBackupId`<sup>Required</sup> <a name="volumeGroupBackupId" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.property.volumeGroupBackupId"></a>

```java
public java.lang.String getVolumeGroupBackupId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.property.internalValue"></a>

```java
public CoreVolumeGroupBackupSourceDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetails">CoreVolumeGroupBackupSourceDetails</a>

---


### CoreVolumeGroupBackupTimeoutsOutputReference <a name="CoreVolumeGroupBackupTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_volume_group_backup.CoreVolumeGroupBackupTimeoutsOutputReference;

new CoreVolumeGroupBackupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeouts">CoreVolumeGroupBackupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeouts">CoreVolumeGroupBackupTimeouts</a>

---



