# `goldenGateDeploymentBackup` Submodule <a name="`goldenGateDeploymentBackup` Submodule" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoldenGateDeploymentBackup <a name="GoldenGateDeploymentBackup" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup oci_golden_gate_deployment_backup}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_deployment_backup.GoldenGateDeploymentBackup;

GoldenGateDeploymentBackup.Builder.create(Construct scope, java.lang.String id)
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
    .bucket(java.lang.String)
    .compartmentId(java.lang.String)
    .deploymentId(java.lang.String)
    .displayName(java.lang.String)
    .namespace(java.lang.String)
    .object(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isLockOverride(java.lang.Boolean)
//  .isLockOverride(IResolvable)
//  .isMetadataOnly(java.lang.Boolean)
//  .isMetadataOnly(IResolvable)
//  .locks(IResolvable)
//  .locks(java.util.List<GoldenGateDeploymentBackupLocks>)
//  .timeouts(GoldenGateDeploymentBackupTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#bucket GoldenGateDeploymentBackup#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#compartment_id GoldenGateDeploymentBackup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#deployment_id GoldenGateDeploymentBackup#deployment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#display_name GoldenGateDeploymentBackup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#namespace GoldenGateDeploymentBackup#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.object">object</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#object GoldenGateDeploymentBackup#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#defined_tags GoldenGateDeploymentBackup#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#freeform_tags GoldenGateDeploymentBackup#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#id GoldenGateDeploymentBackup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.isLockOverride">isLockOverride</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#is_lock_override GoldenGateDeploymentBackup#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.isMetadataOnly">isMetadataOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#is_metadata_only GoldenGateDeploymentBackup#is_metadata_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.locks">locks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks">GoldenGateDeploymentBackupLocks</a>></code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts">GoldenGateDeploymentBackupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#bucket GoldenGateDeploymentBackup#bucket}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#compartment_id GoldenGateDeploymentBackup#compartment_id}.

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.deploymentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#deployment_id GoldenGateDeploymentBackup#deployment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#display_name GoldenGateDeploymentBackup#display_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.namespace"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#namespace GoldenGateDeploymentBackup#namespace}.

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.object"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#object GoldenGateDeploymentBackup#object}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#defined_tags GoldenGateDeploymentBackup#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#freeform_tags GoldenGateDeploymentBackup#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#id GoldenGateDeploymentBackup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isLockOverride`<sup>Optional</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.isLockOverride"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#is_lock_override GoldenGateDeploymentBackup#is_lock_override}.

---

##### `isMetadataOnly`<sup>Optional</sup> <a name="isMetadataOnly" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.isMetadataOnly"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#is_metadata_only GoldenGateDeploymentBackup#is_metadata_only}.

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.locks"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks">GoldenGateDeploymentBackupLocks</a>>

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#locks GoldenGateDeploymentBackup#locks}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts">GoldenGateDeploymentBackupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#timeouts GoldenGateDeploymentBackup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.putLocks">putLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetIsLockOverride">resetIsLockOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetIsMetadataOnly">resetIsMetadataOnly</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetLocks">resetLocks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLocks` <a name="putLocks" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.putLocks"></a>

```java
public void putLocks(IResolvable OR java.util.List<GoldenGateDeploymentBackupLocks> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.putLocks.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks">GoldenGateDeploymentBackupLocks</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.putTimeouts"></a>

```java
public void putTimeouts(GoldenGateDeploymentBackupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts">GoldenGateDeploymentBackupTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetId"></a>

```java
public void resetId()
```

##### `resetIsLockOverride` <a name="resetIsLockOverride" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetIsLockOverride"></a>

```java
public void resetIsLockOverride()
```

##### `resetIsMetadataOnly` <a name="resetIsMetadataOnly" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetIsMetadataOnly"></a>

```java
public void resetIsMetadataOnly()
```

##### `resetLocks` <a name="resetLocks" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetLocks"></a>

```java
public void resetLocks()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoldenGateDeploymentBackup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_deployment_backup.GoldenGateDeploymentBackup;

GoldenGateDeploymentBackup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_deployment_backup.GoldenGateDeploymentBackup;

GoldenGateDeploymentBackup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_deployment_backup.GoldenGateDeploymentBackup;

GoldenGateDeploymentBackup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_deployment_backup.GoldenGateDeploymentBackup;

GoldenGateDeploymentBackup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GoldenGateDeploymentBackup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a GoldenGateDeploymentBackup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GoldenGateDeploymentBackup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GoldenGateDeploymentBackup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the GoldenGateDeploymentBackup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.backupType">backupType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.deploymentType">deploymentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.isAutomatic">isAutomatic</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList">GoldenGateDeploymentBackupLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.oggVersion">oggVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.sizeInBytes">sizeInBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeBackupFinished">timeBackupFinished</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeOfBackup">timeOfBackup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference">GoldenGateDeploymentBackupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.deploymentIdInput">deploymentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.isLockOverrideInput">isLockOverrideInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.isMetadataOnlyInput">isMetadataOnlyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.locksInput">locksInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks">GoldenGateDeploymentBackupLocks</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.objectInput">objectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts">GoldenGateDeploymentBackupTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.isLockOverride">isLockOverride</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.isMetadataOnly">isMetadataOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.object">object</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `backupType`<sup>Required</sup> <a name="backupType" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.backupType"></a>

```java
public java.lang.String getBackupType();
```

- *Type:* java.lang.String

---

##### `deploymentType`<sup>Required</sup> <a name="deploymentType" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.deploymentType"></a>

```java
public java.lang.String getDeploymentType();
```

- *Type:* java.lang.String

---

##### `isAutomatic`<sup>Required</sup> <a name="isAutomatic" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.isAutomatic"></a>

```java
public IResolvable getIsAutomatic();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.locks"></a>

```java
public GoldenGateDeploymentBackupLocksList getLocks();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList">GoldenGateDeploymentBackupLocksList</a>

---

##### `oggVersion`<sup>Required</sup> <a name="oggVersion" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.oggVersion"></a>

```java
public java.lang.String getOggVersion();
```

- *Type:* java.lang.String

---

##### `sizeInBytes`<sup>Required</sup> <a name="sizeInBytes" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.sizeInBytes"></a>

```java
public java.lang.Number getSizeInBytes();
```

- *Type:* java.lang.Number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeBackupFinished`<sup>Required</sup> <a name="timeBackupFinished" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeBackupFinished"></a>

```java
public java.lang.String getTimeBackupFinished();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeOfBackup`<sup>Required</sup> <a name="timeOfBackup" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeOfBackup"></a>

```java
public java.lang.String getTimeOfBackup();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeouts"></a>

```java
public GoldenGateDeploymentBackupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference">GoldenGateDeploymentBackupTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deploymentIdInput`<sup>Optional</sup> <a name="deploymentIdInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.deploymentIdInput"></a>

```java
public java.lang.String getDeploymentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `isLockOverrideInput`<sup>Optional</sup> <a name="isLockOverrideInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.isLockOverrideInput"></a>

```java
public java.lang.Object getIsLockOverrideInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isMetadataOnlyInput`<sup>Optional</sup> <a name="isMetadataOnlyInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.isMetadataOnlyInput"></a>

```java
public java.lang.Object getIsMetadataOnlyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `locksInput`<sup>Optional</sup> <a name="locksInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.locksInput"></a>

```java
public java.lang.Object getLocksInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks">GoldenGateDeploymentBackupLocks</a>>

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `objectInput`<sup>Optional</sup> <a name="objectInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.objectInput"></a>

```java
public java.lang.String getObjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts">GoldenGateDeploymentBackupTimeouts</a>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.deploymentId"></a>

```java
public java.lang.String getDeploymentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isLockOverride`<sup>Required</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.isLockOverride"></a>

```java
public java.lang.Object getIsLockOverride();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isMetadataOnly`<sup>Required</sup> <a name="isMetadataOnly" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.isMetadataOnly"></a>

```java
public java.lang.Object getIsMetadataOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GoldenGateDeploymentBackupConfig <a name="GoldenGateDeploymentBackupConfig" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_deployment_backup.GoldenGateDeploymentBackupConfig;

GoldenGateDeploymentBackupConfig.builder()
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
    .bucket(java.lang.String)
    .compartmentId(java.lang.String)
    .deploymentId(java.lang.String)
    .displayName(java.lang.String)
    .namespace(java.lang.String)
    .object(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .isLockOverride(java.lang.Boolean)
//  .isLockOverride(IResolvable)
//  .isMetadataOnly(java.lang.Boolean)
//  .isMetadataOnly(IResolvable)
//  .locks(IResolvable)
//  .locks(java.util.List<GoldenGateDeploymentBackupLocks>)
//  .timeouts(GoldenGateDeploymentBackupTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#bucket GoldenGateDeploymentBackup#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#compartment_id GoldenGateDeploymentBackup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.deploymentId">deploymentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#deployment_id GoldenGateDeploymentBackup#deployment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#display_name GoldenGateDeploymentBackup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#namespace GoldenGateDeploymentBackup#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.object">object</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#object GoldenGateDeploymentBackup#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#defined_tags GoldenGateDeploymentBackup#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#freeform_tags GoldenGateDeploymentBackup#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#id GoldenGateDeploymentBackup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.isLockOverride">isLockOverride</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#is_lock_override GoldenGateDeploymentBackup#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.isMetadataOnly">isMetadataOnly</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#is_metadata_only GoldenGateDeploymentBackup#is_metadata_only}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.locks">locks</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks">GoldenGateDeploymentBackupLocks</a>></code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts">GoldenGateDeploymentBackupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#bucket GoldenGateDeploymentBackup#bucket}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#compartment_id GoldenGateDeploymentBackup#compartment_id}.

---

##### `deploymentId`<sup>Required</sup> <a name="deploymentId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.deploymentId"></a>

```java
public java.lang.String getDeploymentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#deployment_id GoldenGateDeploymentBackup#deployment_id}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#display_name GoldenGateDeploymentBackup#display_name}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#namespace GoldenGateDeploymentBackup#namespace}.

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.object"></a>

```java
public java.lang.String getObject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#object GoldenGateDeploymentBackup#object}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#defined_tags GoldenGateDeploymentBackup#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#freeform_tags GoldenGateDeploymentBackup#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#id GoldenGateDeploymentBackup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isLockOverride`<sup>Optional</sup> <a name="isLockOverride" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.isLockOverride"></a>

```java
public java.lang.Object getIsLockOverride();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#is_lock_override GoldenGateDeploymentBackup#is_lock_override}.

---

##### `isMetadataOnly`<sup>Optional</sup> <a name="isMetadataOnly" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.isMetadataOnly"></a>

```java
public java.lang.Object getIsMetadataOnly();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#is_metadata_only GoldenGateDeploymentBackup#is_metadata_only}.

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.locks"></a>

```java
public java.lang.Object getLocks();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks">GoldenGateDeploymentBackupLocks</a>>

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#locks GoldenGateDeploymentBackup#locks}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupConfig.property.timeouts"></a>

```java
public GoldenGateDeploymentBackupTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts">GoldenGateDeploymentBackupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#timeouts GoldenGateDeploymentBackup#timeouts}

---

### GoldenGateDeploymentBackupLocks <a name="GoldenGateDeploymentBackupLocks" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_deployment_backup.GoldenGateDeploymentBackupLocks;

GoldenGateDeploymentBackupLocks.builder()
    .type(java.lang.String)
//  .message(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#type GoldenGateDeploymentBackup#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks.property.message">message</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#message GoldenGateDeploymentBackup#message}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#type GoldenGateDeploymentBackup#type}.

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#message GoldenGateDeploymentBackup#message}.

---

### GoldenGateDeploymentBackupTimeouts <a name="GoldenGateDeploymentBackupTimeouts" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_deployment_backup.GoldenGateDeploymentBackupTimeouts;

GoldenGateDeploymentBackupTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#create GoldenGateDeploymentBackup#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#delete GoldenGateDeploymentBackup#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#update GoldenGateDeploymentBackup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#create GoldenGateDeploymentBackup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#delete GoldenGateDeploymentBackup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/golden_gate_deployment_backup#update GoldenGateDeploymentBackup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoldenGateDeploymentBackupLocksList <a name="GoldenGateDeploymentBackupLocksList" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_deployment_backup.GoldenGateDeploymentBackupLocksList;

new GoldenGateDeploymentBackupLocksList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.get"></a>

```java
public GoldenGateDeploymentBackupLocksOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks">GoldenGateDeploymentBackupLocks</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks">GoldenGateDeploymentBackupLocks</a>>

---


### GoldenGateDeploymentBackupLocksOutputReference <a name="GoldenGateDeploymentBackupLocksOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_deployment_backup.GoldenGateDeploymentBackupLocksOutputReference;

new GoldenGateDeploymentBackupLocksOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.resetMessage">resetMessage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMessage` <a name="resetMessage" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.resetMessage"></a>

```java
public void resetMessage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.relatedResourceId">relatedResourceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.messageInput">messageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks">GoldenGateDeploymentBackupLocks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `relatedResourceId`<sup>Required</sup> <a name="relatedResourceId" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.relatedResourceId"></a>

```java
public java.lang.String getRelatedResourceId();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `messageInput`<sup>Optional</sup> <a name="messageInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.messageInput"></a>

```java
public java.lang.String getMessageInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocksOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupLocks">GoldenGateDeploymentBackupLocks</a>

---


### GoldenGateDeploymentBackupTimeoutsOutputReference <a name="GoldenGateDeploymentBackupTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.golden_gate_deployment_backup.GoldenGateDeploymentBackupTimeoutsOutputReference;

new GoldenGateDeploymentBackupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts">GoldenGateDeploymentBackupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.goldenGateDeploymentBackup.GoldenGateDeploymentBackupTimeouts">GoldenGateDeploymentBackupTimeouts</a>

---



