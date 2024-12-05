# `fileStorageFilesystemSnapshotPolicy` Submodule <a name="`fileStorageFilesystemSnapshotPolicy` Submodule" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FileStorageFilesystemSnapshotPolicy <a name="FileStorageFilesystemSnapshotPolicy" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy oci_file_storage_filesystem_snapshot_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.file_storage_filesystem_snapshot_policy.FileStorageFilesystemSnapshotPolicy;

FileStorageFilesystemSnapshotPolicy.Builder.create(Construct scope, java.lang.String id)
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
    .availabilityDomain(java.lang.String)
    .compartmentId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isLockOverride(java.lang.Boolean)
//  .isLockOverride(IResolvable)
//  .locks(IResolvable)
//  .locks(java.util.List<FileStorageFilesystemSnapshotPolicyLocks>)
//  .policyPrefix(java.lang.String)
//  .schedules(IResolvable)
//  .schedules(java.util.List<FileStorageFilesystemSnapshotPolicySchedules>)
//  .state(java.lang.String)
//  .timeouts(FileStorageFilesystemSnapshotPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#availability_domain FileStorageFilesystemSnapshotPolicy#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#compartment_id FileStorageFilesystemSnapshotPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#defined_tags FileStorageFilesystemSnapshotPolicy#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#display_name FileStorageFilesystemSnapshotPolicy#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#freeform_tags FileStorageFilesystemSnapshotPolicy#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#id FileStorageFilesystemSnapshotPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.isLockOverride">isLockOverride</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#is_lock_override FileStorageFilesystemSnapshotPolicy#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.locks">locks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks">FileStorageFilesystemSnapshotPolicyLocks</a>></code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.policyPrefix">policyPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#policy_prefix FileStorageFilesystemSnapshotPolicy#policy_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.schedules">schedules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules">FileStorageFilesystemSnapshotPolicySchedules</a>></code> | schedules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#state FileStorageFilesystemSnapshotPolicy#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts">FileStorageFilesystemSnapshotPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.availabilityDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#availability_domain FileStorageFilesystemSnapshotPolicy#availability_domain}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#compartment_id FileStorageFilesystemSnapshotPolicy#compartment_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#defined_tags FileStorageFilesystemSnapshotPolicy#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#display_name FileStorageFilesystemSnapshotPolicy#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#freeform_tags FileStorageFilesystemSnapshotPolicy#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#id FileStorageFilesystemSnapshotPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isLockOverride`<sup>Optional</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.isLockOverride"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#is_lock_override FileStorageFilesystemSnapshotPolicy#is_lock_override}.

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.locks"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks">FileStorageFilesystemSnapshotPolicyLocks</a>>

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#locks FileStorageFilesystemSnapshotPolicy#locks}

---

##### `policyPrefix`<sup>Optional</sup> <a name="policyPrefix" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.policyPrefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#policy_prefix FileStorageFilesystemSnapshotPolicy#policy_prefix}.

---

##### `schedules`<sup>Optional</sup> <a name="schedules" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.schedules"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules">FileStorageFilesystemSnapshotPolicySchedules</a>>

schedules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#schedules FileStorageFilesystemSnapshotPolicy#schedules}

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#state FileStorageFilesystemSnapshotPolicy#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts">FileStorageFilesystemSnapshotPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#timeouts FileStorageFilesystemSnapshotPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.putLocks">putLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.putSchedules">putSchedules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetIsLockOverride">resetIsLockOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetLocks">resetLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetPolicyPrefix">resetPolicyPrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetSchedules">resetSchedules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLocks` <a name="putLocks" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.putLocks"></a>

```java
public void putLocks(IResolvable OR java.util.List<FileStorageFilesystemSnapshotPolicyLocks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.putLocks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks">FileStorageFilesystemSnapshotPolicyLocks</a>>

---

##### `putSchedules` <a name="putSchedules" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.putSchedules"></a>

```java
public void putSchedules(IResolvable OR java.util.List<FileStorageFilesystemSnapshotPolicySchedules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.putSchedules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules">FileStorageFilesystemSnapshotPolicySchedules</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.putTimeouts"></a>

```java
public void putTimeouts(FileStorageFilesystemSnapshotPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts">FileStorageFilesystemSnapshotPolicyTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetIsLockOverride` <a name="resetIsLockOverride" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetIsLockOverride"></a>

```java
public void resetIsLockOverride()
```

##### `resetLocks` <a name="resetLocks" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetLocks"></a>

```java
public void resetLocks()
```

##### `resetPolicyPrefix` <a name="resetPolicyPrefix" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetPolicyPrefix"></a>

```java
public void resetPolicyPrefix()
```

##### `resetSchedules` <a name="resetSchedules" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetSchedules"></a>

```java
public void resetSchedules()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetState"></a>

```java
public void resetState()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a FileStorageFilesystemSnapshotPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.file_storage_filesystem_snapshot_policy.FileStorageFilesystemSnapshotPolicy;

FileStorageFilesystemSnapshotPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.file_storage_filesystem_snapshot_policy.FileStorageFilesystemSnapshotPolicy;

FileStorageFilesystemSnapshotPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.file_storage_filesystem_snapshot_policy.FileStorageFilesystemSnapshotPolicy;

FileStorageFilesystemSnapshotPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.file_storage_filesystem_snapshot_policy.FileStorageFilesystemSnapshotPolicy;

FileStorageFilesystemSnapshotPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FileStorageFilesystemSnapshotPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a FileStorageFilesystemSnapshotPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FileStorageFilesystemSnapshotPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FileStorageFilesystemSnapshotPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the FileStorageFilesystemSnapshotPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList">FileStorageFilesystemSnapshotPolicyLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.schedules">schedules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList">FileStorageFilesystemSnapshotPolicySchedulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference">FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.isLockOverrideInput">isLockOverrideInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.locksInput">locksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks">FileStorageFilesystemSnapshotPolicyLocks</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.policyPrefixInput">policyPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.schedulesInput">schedulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules">FileStorageFilesystemSnapshotPolicySchedules</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts">FileStorageFilesystemSnapshotPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.isLockOverride">isLockOverride</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.policyPrefix">policyPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.locks"></a>

```java
public FileStorageFilesystemSnapshotPolicyLocksList getLocks();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList">FileStorageFilesystemSnapshotPolicyLocksList</a>

---

##### `schedules`<sup>Required</sup> <a name="schedules" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.schedules"></a>

```java
public FileStorageFilesystemSnapshotPolicySchedulesList getSchedules();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList">FileStorageFilesystemSnapshotPolicySchedulesList</a>

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.timeouts"></a>

```java
public FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference">FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.availabilityDomainInput"></a>

```java
public java.lang.String getAvailabilityDomainInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isLockOverrideInput`<sup>Optional</sup> <a name="isLockOverrideInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.isLockOverrideInput"></a>

```java
public java.lang.Object getIsLockOverrideInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `locksInput`<sup>Optional</sup> <a name="locksInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.locksInput"></a>

```java
public java.lang.Object getLocksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks">FileStorageFilesystemSnapshotPolicyLocks</a>>

---

##### `policyPrefixInput`<sup>Optional</sup> <a name="policyPrefixInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.policyPrefixInput"></a>

```java
public java.lang.String getPolicyPrefixInput();
```

- *Type:* java.lang.String

---

##### `schedulesInput`<sup>Optional</sup> <a name="schedulesInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.schedulesInput"></a>

```java
public java.lang.Object getSchedulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules">FileStorageFilesystemSnapshotPolicySchedules</a>>

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts">FileStorageFilesystemSnapshotPolicyTimeouts</a>

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isLockOverride`<sup>Required</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.isLockOverride"></a>

```java
public java.lang.Object getIsLockOverride();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `policyPrefix`<sup>Required</sup> <a name="policyPrefix" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.policyPrefix"></a>

```java
public java.lang.String getPolicyPrefix();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FileStorageFilesystemSnapshotPolicyConfig <a name="FileStorageFilesystemSnapshotPolicyConfig" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.file_storage_filesystem_snapshot_policy.FileStorageFilesystemSnapshotPolicyConfig;

FileStorageFilesystemSnapshotPolicyConfig.builder()
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
    .availabilityDomain(java.lang.String)
    .compartmentId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isLockOverride(java.lang.Boolean)
//  .isLockOverride(IResolvable)
//  .locks(IResolvable)
//  .locks(java.util.List<FileStorageFilesystemSnapshotPolicyLocks>)
//  .policyPrefix(java.lang.String)
//  .schedules(IResolvable)
//  .schedules(java.util.List<FileStorageFilesystemSnapshotPolicySchedules>)
//  .state(java.lang.String)
//  .timeouts(FileStorageFilesystemSnapshotPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#availability_domain FileStorageFilesystemSnapshotPolicy#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#compartment_id FileStorageFilesystemSnapshotPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#defined_tags FileStorageFilesystemSnapshotPolicy#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#display_name FileStorageFilesystemSnapshotPolicy#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#freeform_tags FileStorageFilesystemSnapshotPolicy#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#id FileStorageFilesystemSnapshotPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.isLockOverride">isLockOverride</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#is_lock_override FileStorageFilesystemSnapshotPolicy#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.locks">locks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks">FileStorageFilesystemSnapshotPolicyLocks</a>></code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.policyPrefix">policyPrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#policy_prefix FileStorageFilesystemSnapshotPolicy#policy_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.schedules">schedules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules">FileStorageFilesystemSnapshotPolicySchedules</a>></code> | schedules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#state FileStorageFilesystemSnapshotPolicy#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts">FileStorageFilesystemSnapshotPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#availability_domain FileStorageFilesystemSnapshotPolicy#availability_domain}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#compartment_id FileStorageFilesystemSnapshotPolicy#compartment_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#defined_tags FileStorageFilesystemSnapshotPolicy#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#display_name FileStorageFilesystemSnapshotPolicy#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#freeform_tags FileStorageFilesystemSnapshotPolicy#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#id FileStorageFilesystemSnapshotPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isLockOverride`<sup>Optional</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.isLockOverride"></a>

```java
public java.lang.Object getIsLockOverride();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#is_lock_override FileStorageFilesystemSnapshotPolicy#is_lock_override}.

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.locks"></a>

```java
public java.lang.Object getLocks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks">FileStorageFilesystemSnapshotPolicyLocks</a>>

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#locks FileStorageFilesystemSnapshotPolicy#locks}

---

##### `policyPrefix`<sup>Optional</sup> <a name="policyPrefix" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.policyPrefix"></a>

```java
public java.lang.String getPolicyPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#policy_prefix FileStorageFilesystemSnapshotPolicy#policy_prefix}.

---

##### `schedules`<sup>Optional</sup> <a name="schedules" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.schedules"></a>

```java
public java.lang.Object getSchedules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules">FileStorageFilesystemSnapshotPolicySchedules</a>>

schedules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#schedules FileStorageFilesystemSnapshotPolicy#schedules}

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#state FileStorageFilesystemSnapshotPolicy#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.timeouts"></a>

```java
public FileStorageFilesystemSnapshotPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts">FileStorageFilesystemSnapshotPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#timeouts FileStorageFilesystemSnapshotPolicy#timeouts}

---

### FileStorageFilesystemSnapshotPolicyLocks <a name="FileStorageFilesystemSnapshotPolicyLocks" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.file_storage_filesystem_snapshot_policy.FileStorageFilesystemSnapshotPolicyLocks;

FileStorageFilesystemSnapshotPolicyLocks.builder()
    .type(java.lang.String)
//  .message(java.lang.String)
//  .relatedResourceId(java.lang.String)
//  .timeCreated(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#type FileStorageFilesystemSnapshotPolicy#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks.property.message">message</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#message FileStorageFilesystemSnapshotPolicy#message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks.property.relatedResourceId">relatedResourceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#related_resource_id FileStorageFilesystemSnapshotPolicy#related_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#time_created FileStorageFilesystemSnapshotPolicy#time_created}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#type FileStorageFilesystemSnapshotPolicy#type}.

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#message FileStorageFilesystemSnapshotPolicy#message}.

---

##### `relatedResourceId`<sup>Optional</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks.property.relatedResourceId"></a>

```java
public java.lang.String getRelatedResourceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#related_resource_id FileStorageFilesystemSnapshotPolicy#related_resource_id}.

---

##### `timeCreated`<sup>Optional</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#time_created FileStorageFilesystemSnapshotPolicy#time_created}.

---

### FileStorageFilesystemSnapshotPolicySchedules <a name="FileStorageFilesystemSnapshotPolicySchedules" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.file_storage_filesystem_snapshot_policy.FileStorageFilesystemSnapshotPolicySchedules;

FileStorageFilesystemSnapshotPolicySchedules.builder()
    .period(java.lang.String)
    .timeZone(java.lang.String)
//  .dayOfMonth(java.lang.Number)
//  .dayOfWeek(java.lang.String)
//  .hourOfDay(java.lang.Number)
//  .month(java.lang.String)
//  .retentionDurationInSeconds(java.lang.String)
//  .schedulePrefix(java.lang.String)
//  .timeScheduleStart(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.period">period</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#period FileStorageFilesystemSnapshotPolicy#period}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#time_zone FileStorageFilesystemSnapshotPolicy#time_zone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.dayOfMonth">dayOfMonth</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#day_of_month FileStorageFilesystemSnapshotPolicy#day_of_month}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#day_of_week FileStorageFilesystemSnapshotPolicy#day_of_week}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.hourOfDay">hourOfDay</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#hour_of_day FileStorageFilesystemSnapshotPolicy#hour_of_day}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.month">month</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#month FileStorageFilesystemSnapshotPolicy#month}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.retentionDurationInSeconds">retentionDurationInSeconds</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#retention_duration_in_seconds FileStorageFilesystemSnapshotPolicy#retention_duration_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.schedulePrefix">schedulePrefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#schedule_prefix FileStorageFilesystemSnapshotPolicy#schedule_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.timeScheduleStart">timeScheduleStart</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#time_schedule_start FileStorageFilesystemSnapshotPolicy#time_schedule_start}. |

---

##### `period`<sup>Required</sup> <a name="period" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#period FileStorageFilesystemSnapshotPolicy#period}.

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#time_zone FileStorageFilesystemSnapshotPolicy#time_zone}.

---

##### `dayOfMonth`<sup>Optional</sup> <a name="dayOfMonth" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.dayOfMonth"></a>

```java
public java.lang.Number getDayOfMonth();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#day_of_month FileStorageFilesystemSnapshotPolicy#day_of_month}.

---

##### `dayOfWeek`<sup>Optional</sup> <a name="dayOfWeek" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#day_of_week FileStorageFilesystemSnapshotPolicy#day_of_week}.

---

##### `hourOfDay`<sup>Optional</sup> <a name="hourOfDay" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.hourOfDay"></a>

```java
public java.lang.Number getHourOfDay();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#hour_of_day FileStorageFilesystemSnapshotPolicy#hour_of_day}.

---

##### `month`<sup>Optional</sup> <a name="month" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.month"></a>

```java
public java.lang.String getMonth();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#month FileStorageFilesystemSnapshotPolicy#month}.

---

##### `retentionDurationInSeconds`<sup>Optional</sup> <a name="retentionDurationInSeconds" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.retentionDurationInSeconds"></a>

```java
public java.lang.String getRetentionDurationInSeconds();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#retention_duration_in_seconds FileStorageFilesystemSnapshotPolicy#retention_duration_in_seconds}.

---

##### `schedulePrefix`<sup>Optional</sup> <a name="schedulePrefix" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.schedulePrefix"></a>

```java
public java.lang.String getSchedulePrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#schedule_prefix FileStorageFilesystemSnapshotPolicy#schedule_prefix}.

---

##### `timeScheduleStart`<sup>Optional</sup> <a name="timeScheduleStart" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.timeScheduleStart"></a>

```java
public java.lang.String getTimeScheduleStart();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#time_schedule_start FileStorageFilesystemSnapshotPolicy#time_schedule_start}.

---

### FileStorageFilesystemSnapshotPolicyTimeouts <a name="FileStorageFilesystemSnapshotPolicyTimeouts" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.file_storage_filesystem_snapshot_policy.FileStorageFilesystemSnapshotPolicyTimeouts;

FileStorageFilesystemSnapshotPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#create FileStorageFilesystemSnapshotPolicy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#delete FileStorageFilesystemSnapshotPolicy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#update FileStorageFilesystemSnapshotPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#create FileStorageFilesystemSnapshotPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#delete FileStorageFilesystemSnapshotPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#update FileStorageFilesystemSnapshotPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FileStorageFilesystemSnapshotPolicyLocksList <a name="FileStorageFilesystemSnapshotPolicyLocksList" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.file_storage_filesystem_snapshot_policy.FileStorageFilesystemSnapshotPolicyLocksList;

new FileStorageFilesystemSnapshotPolicyLocksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.get"></a>

```java
public FileStorageFilesystemSnapshotPolicyLocksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks">FileStorageFilesystemSnapshotPolicyLocks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks">FileStorageFilesystemSnapshotPolicyLocks</a>>

---


### FileStorageFilesystemSnapshotPolicyLocksOutputReference <a name="FileStorageFilesystemSnapshotPolicyLocksOutputReference" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.file_storage_filesystem_snapshot_policy.FileStorageFilesystemSnapshotPolicyLocksOutputReference;

new FileStorageFilesystemSnapshotPolicyLocksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.resetMessage">resetMessage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.resetRelatedResourceId">resetRelatedResourceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.resetTimeCreated">resetTimeCreated</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessage` <a name="resetMessage" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.resetMessage"></a>

```java
public void resetMessage()
```

##### `resetRelatedResourceId` <a name="resetRelatedResourceId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.resetRelatedResourceId"></a>

```java
public void resetRelatedResourceId()
```

##### `resetTimeCreated` <a name="resetTimeCreated" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.resetTimeCreated"></a>

```java
public void resetTimeCreated()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.messageInput">messageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.relatedResourceIdInput">relatedResourceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.timeCreatedInput">timeCreatedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.relatedResourceId">relatedResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks">FileStorageFilesystemSnapshotPolicyLocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.messageInput"></a>

```java
public java.lang.String getMessageInput();
```

- *Type:* java.lang.String

---

##### `relatedResourceIdInput`<sup>Optional</sup> <a name="relatedResourceIdInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.relatedResourceIdInput"></a>

```java
public java.lang.String getRelatedResourceIdInput();
```

- *Type:* java.lang.String

---

##### `timeCreatedInput`<sup>Optional</sup> <a name="timeCreatedInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.timeCreatedInput"></a>

```java
public java.lang.String getTimeCreatedInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `relatedResourceId`<sup>Required</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.relatedResourceId"></a>

```java
public java.lang.String getRelatedResourceId();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks">FileStorageFilesystemSnapshotPolicyLocks</a>

---


### FileStorageFilesystemSnapshotPolicySchedulesList <a name="FileStorageFilesystemSnapshotPolicySchedulesList" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.file_storage_filesystem_snapshot_policy.FileStorageFilesystemSnapshotPolicySchedulesList;

new FileStorageFilesystemSnapshotPolicySchedulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.get"></a>

```java
public FileStorageFilesystemSnapshotPolicySchedulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules">FileStorageFilesystemSnapshotPolicySchedules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules">FileStorageFilesystemSnapshotPolicySchedules</a>>

---


### FileStorageFilesystemSnapshotPolicySchedulesOutputReference <a name="FileStorageFilesystemSnapshotPolicySchedulesOutputReference" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.file_storage_filesystem_snapshot_policy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference;

new FileStorageFilesystemSnapshotPolicySchedulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetDayOfMonth">resetDayOfMonth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetDayOfWeek">resetDayOfWeek</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetHourOfDay">resetHourOfDay</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetMonth">resetMonth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetRetentionDurationInSeconds">resetRetentionDurationInSeconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetSchedulePrefix">resetSchedulePrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetTimeScheduleStart">resetTimeScheduleStart</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDayOfMonth` <a name="resetDayOfMonth" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetDayOfMonth"></a>

```java
public void resetDayOfMonth()
```

##### `resetDayOfWeek` <a name="resetDayOfWeek" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetDayOfWeek"></a>

```java
public void resetDayOfWeek()
```

##### `resetHourOfDay` <a name="resetHourOfDay" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetHourOfDay"></a>

```java
public void resetHourOfDay()
```

##### `resetMonth` <a name="resetMonth" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetMonth"></a>

```java
public void resetMonth()
```

##### `resetRetentionDurationInSeconds` <a name="resetRetentionDurationInSeconds" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetRetentionDurationInSeconds"></a>

```java
public void resetRetentionDurationInSeconds()
```

##### `resetSchedulePrefix` <a name="resetSchedulePrefix" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetSchedulePrefix"></a>

```java
public void resetSchedulePrefix()
```

##### `resetTimeScheduleStart` <a name="resetTimeScheduleStart" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetTimeScheduleStart"></a>

```java
public void resetTimeScheduleStart()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfMonthInput">dayOfMonthInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.hourOfDayInput">hourOfDayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.monthInput">monthInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.periodInput">periodInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.retentionDurationInSecondsInput">retentionDurationInSecondsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.schedulePrefixInput">schedulePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeScheduleStartInput">timeScheduleStartInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeZoneInput">timeZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfMonth">dayOfMonth</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.hourOfDay">hourOfDay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.month">month</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.period">period</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.retentionDurationInSeconds">retentionDurationInSeconds</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.schedulePrefix">schedulePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeScheduleStart">timeScheduleStart</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeZone">timeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules">FileStorageFilesystemSnapshotPolicySchedules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayOfMonthInput`<sup>Optional</sup> <a name="dayOfMonthInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfMonthInput"></a>

```java
public java.lang.Number getDayOfMonthInput();
```

- *Type:* java.lang.Number

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfWeekInput"></a>

```java
public java.lang.String getDayOfWeekInput();
```

- *Type:* java.lang.String

---

##### `hourOfDayInput`<sup>Optional</sup> <a name="hourOfDayInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.hourOfDayInput"></a>

```java
public java.lang.Number getHourOfDayInput();
```

- *Type:* java.lang.Number

---

##### `monthInput`<sup>Optional</sup> <a name="monthInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.monthInput"></a>

```java
public java.lang.String getMonthInput();
```

- *Type:* java.lang.String

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.periodInput"></a>

```java
public java.lang.String getPeriodInput();
```

- *Type:* java.lang.String

---

##### `retentionDurationInSecondsInput`<sup>Optional</sup> <a name="retentionDurationInSecondsInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.retentionDurationInSecondsInput"></a>

```java
public java.lang.String getRetentionDurationInSecondsInput();
```

- *Type:* java.lang.String

---

##### `schedulePrefixInput`<sup>Optional</sup> <a name="schedulePrefixInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.schedulePrefixInput"></a>

```java
public java.lang.String getSchedulePrefixInput();
```

- *Type:* java.lang.String

---

##### `timeScheduleStartInput`<sup>Optional</sup> <a name="timeScheduleStartInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeScheduleStartInput"></a>

```java
public java.lang.String getTimeScheduleStartInput();
```

- *Type:* java.lang.String

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeZoneInput"></a>

```java
public java.lang.String getTimeZoneInput();
```

- *Type:* java.lang.String

---

##### `dayOfMonth`<sup>Required</sup> <a name="dayOfMonth" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfMonth"></a>

```java
public java.lang.Number getDayOfMonth();
```

- *Type:* java.lang.Number

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfWeek"></a>

```java
public java.lang.String getDayOfWeek();
```

- *Type:* java.lang.String

---

##### `hourOfDay`<sup>Required</sup> <a name="hourOfDay" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.hourOfDay"></a>

```java
public java.lang.Number getHourOfDay();
```

- *Type:* java.lang.Number

---

##### `month`<sup>Required</sup> <a name="month" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.month"></a>

```java
public java.lang.String getMonth();
```

- *Type:* java.lang.String

---

##### `period`<sup>Required</sup> <a name="period" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.period"></a>

```java
public java.lang.String getPeriod();
```

- *Type:* java.lang.String

---

##### `retentionDurationInSeconds`<sup>Required</sup> <a name="retentionDurationInSeconds" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.retentionDurationInSeconds"></a>

```java
public java.lang.String getRetentionDurationInSeconds();
```

- *Type:* java.lang.String

---

##### `schedulePrefix`<sup>Required</sup> <a name="schedulePrefix" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.schedulePrefix"></a>

```java
public java.lang.String getSchedulePrefix();
```

- *Type:* java.lang.String

---

##### `timeScheduleStart`<sup>Required</sup> <a name="timeScheduleStart" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeScheduleStart"></a>

```java
public java.lang.String getTimeScheduleStart();
```

- *Type:* java.lang.String

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeZone"></a>

```java
public java.lang.String getTimeZone();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules">FileStorageFilesystemSnapshotPolicySchedules</a>

---


### FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference <a name="FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.file_storage_filesystem_snapshot_policy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference;

new FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts">FileStorageFilesystemSnapshotPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts">FileStorageFilesystemSnapshotPolicyTimeouts</a>

---



