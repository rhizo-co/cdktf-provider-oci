# `coreVolumeBackupPolicy` Submodule <a name="`coreVolumeBackupPolicy` Submodule" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreVolumeBackupPolicy <a name="CoreVolumeBackupPolicy" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy oci_core_volume_backup_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_volume_backup_policy.CoreVolumeBackupPolicy;

CoreVolumeBackupPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .compartmentId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .destinationRegion(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .schedules(IResolvable)
//  .schedules(java.util.List<CoreVolumeBackupPolicySchedules>)
//  .timeouts(CoreVolumeBackupPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#compartment_id CoreVolumeBackupPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#defined_tags CoreVolumeBackupPolicy#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer.parameter.destinationRegion">destinationRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#destination_region CoreVolumeBackupPolicy#destination_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#display_name CoreVolumeBackupPolicy#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#freeform_tags CoreVolumeBackupPolicy#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#id CoreVolumeBackupPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer.parameter.schedules">schedules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules">CoreVolumeBackupPolicySchedules</a>></code> | schedules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeouts">CoreVolumeBackupPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#compartment_id CoreVolumeBackupPolicy#compartment_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#defined_tags CoreVolumeBackupPolicy#defined_tags}.

---

##### `destinationRegion`<sup>Optional</sup> <a name="destinationRegion" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer.parameter.destinationRegion"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#destination_region CoreVolumeBackupPolicy#destination_region}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#display_name CoreVolumeBackupPolicy#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#freeform_tags CoreVolumeBackupPolicy#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#id CoreVolumeBackupPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schedules`<sup>Optional</sup> <a name="schedules" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer.parameter.schedules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules">CoreVolumeBackupPolicySchedules</a>>

schedules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#schedules CoreVolumeBackupPolicy#schedules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeouts">CoreVolumeBackupPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#timeouts CoreVolumeBackupPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.putSchedules">putSchedules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.resetDestinationRegion">resetDestinationRegion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.resetSchedules">resetSchedules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSchedules` <a name="putSchedules" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.putSchedules"></a>

```java
public void putSchedules(IResolvable OR java.util.List<CoreVolumeBackupPolicySchedules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.putSchedules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules">CoreVolumeBackupPolicySchedules</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.putTimeouts"></a>

```java
public void putTimeouts(CoreVolumeBackupPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeouts">CoreVolumeBackupPolicyTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDestinationRegion` <a name="resetDestinationRegion" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.resetDestinationRegion"></a>

```java
public void resetDestinationRegion()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetSchedules` <a name="resetSchedules" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.resetSchedules"></a>

```java
public void resetSchedules()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CoreVolumeBackupPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_volume_backup_policy.CoreVolumeBackupPolicy;

CoreVolumeBackupPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_volume_backup_policy.CoreVolumeBackupPolicy;

CoreVolumeBackupPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_volume_backup_policy.CoreVolumeBackupPolicy;

CoreVolumeBackupPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_volume_backup_policy.CoreVolumeBackupPolicy;

CoreVolumeBackupPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CoreVolumeBackupPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CoreVolumeBackupPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CoreVolumeBackupPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CoreVolumeBackupPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CoreVolumeBackupPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.schedules">schedules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList">CoreVolumeBackupPolicySchedulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference">CoreVolumeBackupPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.destinationRegionInput">destinationRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.schedulesInput">schedulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules">CoreVolumeBackupPolicySchedules</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeouts">CoreVolumeBackupPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.destinationRegion">destinationRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `schedules`<sup>Required</sup> <a name="schedules" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.schedules"></a>

```java
public CoreVolumeBackupPolicySchedulesList getSchedules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList">CoreVolumeBackupPolicySchedulesList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.timeouts"></a>

```java
public CoreVolumeBackupPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference">CoreVolumeBackupPolicyTimeoutsOutputReference</a>

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `destinationRegionInput`<sup>Optional</sup> <a name="destinationRegionInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.destinationRegionInput"></a>

```java
public java.lang.String getDestinationRegionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `schedulesInput`<sup>Optional</sup> <a name="schedulesInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.schedulesInput"></a>

```java
public java.lang.Object getSchedulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules">CoreVolumeBackupPolicySchedules</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeouts">CoreVolumeBackupPolicyTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `destinationRegion`<sup>Required</sup> <a name="destinationRegion" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.destinationRegion"></a>

```java
public java.lang.String getDestinationRegion();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CoreVolumeBackupPolicyConfig <a name="CoreVolumeBackupPolicyConfig" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_volume_backup_policy.CoreVolumeBackupPolicyConfig;

CoreVolumeBackupPolicyConfig.builder()
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
    .compartmentId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .destinationRegion(java.lang.String)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .schedules(IResolvable)
//  .schedules(java.util.List<CoreVolumeBackupPolicySchedules>)
//  .timeouts(CoreVolumeBackupPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#compartment_id CoreVolumeBackupPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#defined_tags CoreVolumeBackupPolicy#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.destinationRegion">destinationRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#destination_region CoreVolumeBackupPolicy#destination_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#display_name CoreVolumeBackupPolicy#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#freeform_tags CoreVolumeBackupPolicy#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#id CoreVolumeBackupPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.schedules">schedules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules">CoreVolumeBackupPolicySchedules</a>></code> | schedules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeouts">CoreVolumeBackupPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#compartment_id CoreVolumeBackupPolicy#compartment_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#defined_tags CoreVolumeBackupPolicy#defined_tags}.

---

##### `destinationRegion`<sup>Optional</sup> <a name="destinationRegion" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.destinationRegion"></a>

```java
public java.lang.String getDestinationRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#destination_region CoreVolumeBackupPolicy#destination_region}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#display_name CoreVolumeBackupPolicy#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#freeform_tags CoreVolumeBackupPolicy#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#id CoreVolumeBackupPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `schedules`<sup>Optional</sup> <a name="schedules" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.schedules"></a>

```java
public java.lang.Object getSchedules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules">CoreVolumeBackupPolicySchedules</a>>

schedules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#schedules CoreVolumeBackupPolicy#schedules}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyConfig.property.timeouts"></a>

```java
public CoreVolumeBackupPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeouts">CoreVolumeBackupPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#timeouts CoreVolumeBackupPolicy#timeouts}

---

### CoreVolumeBackupPolicySchedules <a name="CoreVolumeBackupPolicySchedules" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_volume_backup_policy.CoreVolumeBackupPolicySchedules;

CoreVolumeBackupPolicySchedules.builder()
    .backupType(java.lang.String)
    .period(java.lang.String)
    .retentionSeconds(java.lang.Number)
//  .dayOfMonth(java.lang.Number)
//  .dayOfWeek(java.lang.String)
//  .hourOfDay(java.lang.Number)
//  .month(java.lang.String)
//  .offsetSeconds(java.lang.Number)
//  .offsetType(java.lang.String)
//  .timeZone(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.property.backupType">backupType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#backup_type CoreVolumeBackupPolicy#backup_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.property.period">period</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#period CoreVolumeBackupPolicy#period}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.property.retentionSeconds">retentionSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#retention_seconds CoreVolumeBackupPolicy#retention_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.property.dayOfMonth">dayOfMonth</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#day_of_month CoreVolumeBackupPolicy#day_of_month}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#day_of_week CoreVolumeBackupPolicy#day_of_week}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.property.hourOfDay">hourOfDay</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#hour_of_day CoreVolumeBackupPolicy#hour_of_day}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.property.month">month</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#month CoreVolumeBackupPolicy#month}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.property.offsetSeconds">offsetSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#offset_seconds CoreVolumeBackupPolicy#offset_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.property.offsetType">offsetType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#offset_type CoreVolumeBackupPolicy#offset_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#time_zone CoreVolumeBackupPolicy#time_zone}. |

---

##### `backupType`<sup>Required</sup> <a name="backupType" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.property.backupType"></a>

```java
public java.lang.String getBackupType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#backup_type CoreVolumeBackupPolicy#backup_type}.

---

##### `period`<sup>Required</sup> <a name="period" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#period CoreVolumeBackupPolicy#period}.

---

##### `retentionSeconds`<sup>Required</sup> <a name="retentionSeconds" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.property.retentionSeconds"></a>

```java
public java.lang.Number getRetentionSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#retention_seconds CoreVolumeBackupPolicy#retention_seconds}.

---

##### `dayOfMonth`<sup>Optional</sup> <a name="dayOfMonth" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.property.dayOfMonth"></a>

```java
public java.lang.Number getDayOfMonth();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#day_of_month CoreVolumeBackupPolicy#day_of_month}.

---

##### `dayOfWeek`<sup>Optional</sup> <a name="dayOfWeek" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#day_of_week CoreVolumeBackupPolicy#day_of_week}.

---

##### `hourOfDay`<sup>Optional</sup> <a name="hourOfDay" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.property.hourOfDay"></a>

```java
public java.lang.Number getHourOfDay();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#hour_of_day CoreVolumeBackupPolicy#hour_of_day}.

---

##### `month`<sup>Optional</sup> <a name="month" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.property.month"></a>

```java
public java.lang.String getMonth();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#month CoreVolumeBackupPolicy#month}.

---

##### `offsetSeconds`<sup>Optional</sup> <a name="offsetSeconds" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.property.offsetSeconds"></a>

```java
public java.lang.Number getOffsetSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#offset_seconds CoreVolumeBackupPolicy#offset_seconds}.

---

##### `offsetType`<sup>Optional</sup> <a name="offsetType" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.property.offsetType"></a>

```java
public java.lang.String getOffsetType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#offset_type CoreVolumeBackupPolicy#offset_type}.

---

##### `timeZone`<sup>Optional</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#time_zone CoreVolumeBackupPolicy#time_zone}.

---

### CoreVolumeBackupPolicyTimeouts <a name="CoreVolumeBackupPolicyTimeouts" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_volume_backup_policy.CoreVolumeBackupPolicyTimeouts;

CoreVolumeBackupPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#create CoreVolumeBackupPolicy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#delete CoreVolumeBackupPolicy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#update CoreVolumeBackupPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#create CoreVolumeBackupPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#delete CoreVolumeBackupPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_backup_policy#update CoreVolumeBackupPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreVolumeBackupPolicySchedulesList <a name="CoreVolumeBackupPolicySchedulesList" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_volume_backup_policy.CoreVolumeBackupPolicySchedulesList;

new CoreVolumeBackupPolicySchedulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.get"></a>

```java
public CoreVolumeBackupPolicySchedulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules">CoreVolumeBackupPolicySchedules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules">CoreVolumeBackupPolicySchedules</a>>

---


### CoreVolumeBackupPolicySchedulesOutputReference <a name="CoreVolumeBackupPolicySchedulesOutputReference" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_volume_backup_policy.CoreVolumeBackupPolicySchedulesOutputReference;

new CoreVolumeBackupPolicySchedulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.resetDayOfMonth">resetDayOfMonth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.resetDayOfWeek">resetDayOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.resetHourOfDay">resetHourOfDay</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.resetMonth">resetMonth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.resetOffsetSeconds">resetOffsetSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.resetOffsetType">resetOffsetType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.resetTimeZone">resetTimeZone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDayOfMonth` <a name="resetDayOfMonth" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.resetDayOfMonth"></a>

```java
public void resetDayOfMonth()
```

##### `resetDayOfWeek` <a name="resetDayOfWeek" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.resetDayOfWeek"></a>

```java
public void resetDayOfWeek()
```

##### `resetHourOfDay` <a name="resetHourOfDay" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.resetHourOfDay"></a>

```java
public void resetHourOfDay()
```

##### `resetMonth` <a name="resetMonth" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.resetMonth"></a>

```java
public void resetMonth()
```

##### `resetOffsetSeconds` <a name="resetOffsetSeconds" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.resetOffsetSeconds"></a>

```java
public void resetOffsetSeconds()
```

##### `resetOffsetType` <a name="resetOffsetType" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.resetOffsetType"></a>

```java
public void resetOffsetType()
```

##### `resetTimeZone` <a name="resetTimeZone" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.resetTimeZone"></a>

```java
public void resetTimeZone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.backupTypeInput">backupTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.dayOfMonthInput">dayOfMonthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.hourOfDayInput">hourOfDayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.monthInput">monthInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.offsetSecondsInput">offsetSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.offsetTypeInput">offsetTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.periodInput">periodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.retentionSecondsInput">retentionSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.backupType">backupType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.dayOfMonth">dayOfMonth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.hourOfDay">hourOfDay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.month">month</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.offsetSeconds">offsetSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.offsetType">offsetType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.period">period</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.retentionSeconds">retentionSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules">CoreVolumeBackupPolicySchedules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `backupTypeInput`<sup>Optional</sup> <a name="backupTypeInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.backupTypeInput"></a>

```java
public java.lang.String getBackupTypeInput();
```

- *Type:* java.lang.String

---

##### `dayOfMonthInput`<sup>Optional</sup> <a name="dayOfMonthInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.dayOfMonthInput"></a>

```java
public java.lang.Number getDayOfMonthInput();
```

- *Type:* java.lang.Number

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.dayOfWeekInput"></a>

```java
public java.lang.String getDayOfWeekInput();
```

- *Type:* java.lang.String

---

##### `hourOfDayInput`<sup>Optional</sup> <a name="hourOfDayInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.hourOfDayInput"></a>

```java
public java.lang.Number getHourOfDayInput();
```

- *Type:* java.lang.Number

---

##### `monthInput`<sup>Optional</sup> <a name="monthInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.monthInput"></a>

```java
public java.lang.String getMonthInput();
```

- *Type:* java.lang.String

---

##### `offsetSecondsInput`<sup>Optional</sup> <a name="offsetSecondsInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.offsetSecondsInput"></a>

```java
public java.lang.Number getOffsetSecondsInput();
```

- *Type:* java.lang.Number

---

##### `offsetTypeInput`<sup>Optional</sup> <a name="offsetTypeInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.offsetTypeInput"></a>

```java
public java.lang.String getOffsetTypeInput();
```

- *Type:* java.lang.String

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.periodInput"></a>

```java
public java.lang.String getPeriodInput();
```

- *Type:* java.lang.String

---

##### `retentionSecondsInput`<sup>Optional</sup> <a name="retentionSecondsInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.retentionSecondsInput"></a>

```java
public java.lang.Number getRetentionSecondsInput();
```

- *Type:* java.lang.Number

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `backupType`<sup>Required</sup> <a name="backupType" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.backupType"></a>

```java
public java.lang.String getBackupType();
```

- *Type:* java.lang.String

---

##### `dayOfMonth`<sup>Required</sup> <a name="dayOfMonth" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.dayOfMonth"></a>

```java
public java.lang.Number getDayOfMonth();
```

- *Type:* java.lang.Number

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

---

##### `hourOfDay`<sup>Required</sup> <a name="hourOfDay" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.hourOfDay"></a>

```java
public java.lang.Number getHourOfDay();
```

- *Type:* java.lang.Number

---

##### `month`<sup>Required</sup> <a name="month" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.month"></a>

```java
public java.lang.String getMonth();
```

- *Type:* java.lang.String

---

##### `offsetSeconds`<sup>Required</sup> <a name="offsetSeconds" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.offsetSeconds"></a>

```java
public java.lang.Number getOffsetSeconds();
```

- *Type:* java.lang.Number

---

##### `offsetType`<sup>Required</sup> <a name="offsetType" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.offsetType"></a>

```java
public java.lang.String getOffsetType();
```

- *Type:* java.lang.String

---

##### `period`<sup>Required</sup> <a name="period" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

---

##### `retentionSeconds`<sup>Required</sup> <a name="retentionSeconds" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.retentionSeconds"></a>

```java
public java.lang.Number getRetentionSeconds();
```

- *Type:* java.lang.Number

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicySchedules">CoreVolumeBackupPolicySchedules</a>

---


### CoreVolumeBackupPolicyTimeoutsOutputReference <a name="CoreVolumeBackupPolicyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_volume_backup_policy.CoreVolumeBackupPolicyTimeoutsOutputReference;

new CoreVolumeBackupPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeouts">CoreVolumeBackupPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreVolumeBackupPolicy.CoreVolumeBackupPolicyTimeouts">CoreVolumeBackupPolicyTimeouts</a>

---



