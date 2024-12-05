# `coreVolumeGroup` Submodule <a name="`coreVolumeGroup` Submodule" id="rhizo-co-terraform-provider-oci.coreVolumeGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreVolumeGroup <a name="CoreVolumeGroup" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group oci_core_volume_group}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_volume_group.CoreVolumeGroup;

CoreVolumeGroup.Builder.create(Construct scope, java.lang.String id)
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
    .sourceDetails(CoreVolumeGroupSourceDetails)
//  .backupPolicyId(java.lang.String)
//  .clusterPlacementGroupId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .preserveVolumeReplica(java.lang.Boolean)
//  .preserveVolumeReplica(IResolvable)
//  .timeouts(CoreVolumeGroupTimeouts)
//  .volumeGroupReplicas(IResolvable)
//  .volumeGroupReplicas(java.util.List<CoreVolumeGroupVolumeGroupReplicas>)
//  .volumeGroupReplicasDeletion(java.lang.Boolean)
//  .volumeGroupReplicasDeletion(IResolvable)
//  .volumeIds(java.util.List<java.lang.String>)
//  .xrcKmsKeyId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#availability_domain CoreVolumeGroup#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#compartment_id CoreVolumeGroup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.sourceDetails">sourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails">CoreVolumeGroupSourceDetails</a></code> | source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.backupPolicyId">backupPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#backup_policy_id CoreVolumeGroup#backup_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.clusterPlacementGroupId">clusterPlacementGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#cluster_placement_group_id CoreVolumeGroup#cluster_placement_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#defined_tags CoreVolumeGroup#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#display_name CoreVolumeGroup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#freeform_tags CoreVolumeGroup#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#id CoreVolumeGroup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.preserveVolumeReplica">preserveVolumeReplica</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#preserve_volume_replica CoreVolumeGroup#preserve_volume_replica}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts">CoreVolumeGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.volumeGroupReplicas">volumeGroupReplicas</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas">CoreVolumeGroupVolumeGroupReplicas</a>></code> | volume_group_replicas block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.volumeGroupReplicasDeletion">volumeGroupReplicasDeletion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_group_replicas_deletion CoreVolumeGroup#volume_group_replicas_deletion}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.volumeIds">volumeIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_ids CoreVolumeGroup#volume_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.xrcKmsKeyId">xrcKmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#xrc_kms_key_id CoreVolumeGroup#xrc_kms_key_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.availabilityDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#availability_domain CoreVolumeGroup#availability_domain}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#compartment_id CoreVolumeGroup#compartment_id}.

---

##### `sourceDetails`<sup>Required</sup> <a name="sourceDetails" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.sourceDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails">CoreVolumeGroupSourceDetails</a>

source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#source_details CoreVolumeGroup#source_details}

---

##### `backupPolicyId`<sup>Optional</sup> <a name="backupPolicyId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.backupPolicyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#backup_policy_id CoreVolumeGroup#backup_policy_id}.

---

##### `clusterPlacementGroupId`<sup>Optional</sup> <a name="clusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.clusterPlacementGroupId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#cluster_placement_group_id CoreVolumeGroup#cluster_placement_group_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#defined_tags CoreVolumeGroup#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#display_name CoreVolumeGroup#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#freeform_tags CoreVolumeGroup#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#id CoreVolumeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `preserveVolumeReplica`<sup>Optional</sup> <a name="preserveVolumeReplica" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.preserveVolumeReplica"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#preserve_volume_replica CoreVolumeGroup#preserve_volume_replica}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts">CoreVolumeGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#timeouts CoreVolumeGroup#timeouts}

---

##### `volumeGroupReplicas`<sup>Optional</sup> <a name="volumeGroupReplicas" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.volumeGroupReplicas"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas">CoreVolumeGroupVolumeGroupReplicas</a>>

volume_group_replicas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_group_replicas CoreVolumeGroup#volume_group_replicas}

---

##### `volumeGroupReplicasDeletion`<sup>Optional</sup> <a name="volumeGroupReplicasDeletion" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.volumeGroupReplicasDeletion"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_group_replicas_deletion CoreVolumeGroup#volume_group_replicas_deletion}.

---

##### `volumeIds`<sup>Optional</sup> <a name="volumeIds" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.volumeIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_ids CoreVolumeGroup#volume_ids}.

---

##### `xrcKmsKeyId`<sup>Optional</sup> <a name="xrcKmsKeyId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.xrcKmsKeyId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#xrc_kms_key_id CoreVolumeGroup#xrc_kms_key_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.putSourceDetails">putSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.putVolumeGroupReplicas">putVolumeGroupReplicas</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetBackupPolicyId">resetBackupPolicyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetClusterPlacementGroupId">resetClusterPlacementGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetPreserveVolumeReplica">resetPreserveVolumeReplica</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetVolumeGroupReplicas">resetVolumeGroupReplicas</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetVolumeGroupReplicasDeletion">resetVolumeGroupReplicasDeletion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetVolumeIds">resetVolumeIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetXrcKmsKeyId">resetXrcKmsKeyId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSourceDetails` <a name="putSourceDetails" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.putSourceDetails"></a>

```java
public void putSourceDetails(CoreVolumeGroupSourceDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.putSourceDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails">CoreVolumeGroupSourceDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.putTimeouts"></a>

```java
public void putTimeouts(CoreVolumeGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts">CoreVolumeGroupTimeouts</a>

---

##### `putVolumeGroupReplicas` <a name="putVolumeGroupReplicas" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.putVolumeGroupReplicas"></a>

```java
public void putVolumeGroupReplicas(IResolvable OR java.util.List<CoreVolumeGroupVolumeGroupReplicas> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.putVolumeGroupReplicas.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas">CoreVolumeGroupVolumeGroupReplicas</a>>

---

##### `resetBackupPolicyId` <a name="resetBackupPolicyId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetBackupPolicyId"></a>

```java
public void resetBackupPolicyId()
```

##### `resetClusterPlacementGroupId` <a name="resetClusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetClusterPlacementGroupId"></a>

```java
public void resetClusterPlacementGroupId()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetId"></a>

```java
public void resetId()
```

##### `resetPreserveVolumeReplica` <a name="resetPreserveVolumeReplica" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetPreserveVolumeReplica"></a>

```java
public void resetPreserveVolumeReplica()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetVolumeGroupReplicas` <a name="resetVolumeGroupReplicas" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetVolumeGroupReplicas"></a>

```java
public void resetVolumeGroupReplicas()
```

##### `resetVolumeGroupReplicasDeletion` <a name="resetVolumeGroupReplicasDeletion" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetVolumeGroupReplicasDeletion"></a>

```java
public void resetVolumeGroupReplicasDeletion()
```

##### `resetVolumeIds` <a name="resetVolumeIds" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetVolumeIds"></a>

```java
public void resetVolumeIds()
```

##### `resetXrcKmsKeyId` <a name="resetXrcKmsKeyId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetXrcKmsKeyId"></a>

```java
public void resetXrcKmsKeyId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CoreVolumeGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_volume_group.CoreVolumeGroup;

CoreVolumeGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_volume_group.CoreVolumeGroup;

CoreVolumeGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_volume_group.CoreVolumeGroup;

CoreVolumeGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_volume_group.CoreVolumeGroup;

CoreVolumeGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CoreVolumeGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CoreVolumeGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CoreVolumeGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CoreVolumeGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CoreVolumeGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.isHydrated">isHydrated</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.sizeInGbs">sizeInGbs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.sizeInMbs">sizeInMbs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.sourceDetails">sourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference">CoreVolumeGroupSourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference">CoreVolumeGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.volumeGroupReplicas">volumeGroupReplicas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList">CoreVolumeGroupVolumeGroupReplicasList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.backupPolicyIdInput">backupPolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.clusterPlacementGroupIdInput">clusterPlacementGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.preserveVolumeReplicaInput">preserveVolumeReplicaInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.sourceDetailsInput">sourceDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails">CoreVolumeGroupSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts">CoreVolumeGroupTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.volumeGroupReplicasDeletionInput">volumeGroupReplicasDeletionInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.volumeGroupReplicasInput">volumeGroupReplicasInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas">CoreVolumeGroupVolumeGroupReplicas</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.volumeIdsInput">volumeIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.xrcKmsKeyIdInput">xrcKmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.backupPolicyId">backupPolicyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.clusterPlacementGroupId">clusterPlacementGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.preserveVolumeReplica">preserveVolumeReplica</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.volumeGroupReplicasDeletion">volumeGroupReplicasDeletion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.volumeIds">volumeIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.xrcKmsKeyId">xrcKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `isHydrated`<sup>Required</sup> <a name="isHydrated" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.isHydrated"></a>

```java
public IResolvable getIsHydrated();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `sizeInGbs`<sup>Required</sup> <a name="sizeInGbs" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.sizeInGbs"></a>

```java
public java.lang.String getSizeInGbs();
```

- *Type:* java.lang.String

---

##### `sizeInMbs`<sup>Required</sup> <a name="sizeInMbs" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.sizeInMbs"></a>

```java
public java.lang.String getSizeInMbs();
```

- *Type:* java.lang.String

---

##### `sourceDetails`<sup>Required</sup> <a name="sourceDetails" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.sourceDetails"></a>

```java
public CoreVolumeGroupSourceDetailsOutputReference getSourceDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference">CoreVolumeGroupSourceDetailsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.timeouts"></a>

```java
public CoreVolumeGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference">CoreVolumeGroupTimeoutsOutputReference</a>

---

##### `volumeGroupReplicas`<sup>Required</sup> <a name="volumeGroupReplicas" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.volumeGroupReplicas"></a>

```java
public CoreVolumeGroupVolumeGroupReplicasList getVolumeGroupReplicas();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList">CoreVolumeGroupVolumeGroupReplicasList</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.availabilityDomainInput"></a>

```java
public java.lang.String getAvailabilityDomainInput();
```

- *Type:* java.lang.String

---

##### `backupPolicyIdInput`<sup>Optional</sup> <a name="backupPolicyIdInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.backupPolicyIdInput"></a>

```java
public java.lang.String getBackupPolicyIdInput();
```

- *Type:* java.lang.String

---

##### `clusterPlacementGroupIdInput`<sup>Optional</sup> <a name="clusterPlacementGroupIdInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.clusterPlacementGroupIdInput"></a>

```java
public java.lang.String getClusterPlacementGroupIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `preserveVolumeReplicaInput`<sup>Optional</sup> <a name="preserveVolumeReplicaInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.preserveVolumeReplicaInput"></a>

```java
public java.lang.Object getPreserveVolumeReplicaInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sourceDetailsInput`<sup>Optional</sup> <a name="sourceDetailsInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.sourceDetailsInput"></a>

```java
public CoreVolumeGroupSourceDetails getSourceDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails">CoreVolumeGroupSourceDetails</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts">CoreVolumeGroupTimeouts</a>

---

##### `volumeGroupReplicasDeletionInput`<sup>Optional</sup> <a name="volumeGroupReplicasDeletionInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.volumeGroupReplicasDeletionInput"></a>

```java
public java.lang.Object getVolumeGroupReplicasDeletionInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `volumeGroupReplicasInput`<sup>Optional</sup> <a name="volumeGroupReplicasInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.volumeGroupReplicasInput"></a>

```java
public java.lang.Object getVolumeGroupReplicasInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas">CoreVolumeGroupVolumeGroupReplicas</a>>

---

##### `volumeIdsInput`<sup>Optional</sup> <a name="volumeIdsInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.volumeIdsInput"></a>

```java
public java.util.List<java.lang.String> getVolumeIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xrcKmsKeyIdInput`<sup>Optional</sup> <a name="xrcKmsKeyIdInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.xrcKmsKeyIdInput"></a>

```java
public java.lang.String getXrcKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `backupPolicyId`<sup>Required</sup> <a name="backupPolicyId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.backupPolicyId"></a>

```java
public java.lang.String getBackupPolicyId();
```

- *Type:* java.lang.String

---

##### `clusterPlacementGroupId`<sup>Required</sup> <a name="clusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.clusterPlacementGroupId"></a>

```java
public java.lang.String getClusterPlacementGroupId();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `preserveVolumeReplica`<sup>Required</sup> <a name="preserveVolumeReplica" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.preserveVolumeReplica"></a>

```java
public java.lang.Object getPreserveVolumeReplica();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `volumeGroupReplicasDeletion`<sup>Required</sup> <a name="volumeGroupReplicasDeletion" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.volumeGroupReplicasDeletion"></a>

```java
public java.lang.Object getVolumeGroupReplicasDeletion();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `volumeIds`<sup>Required</sup> <a name="volumeIds" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.volumeIds"></a>

```java
public java.util.List<java.lang.String> getVolumeIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `xrcKmsKeyId`<sup>Required</sup> <a name="xrcKmsKeyId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.xrcKmsKeyId"></a>

```java
public java.lang.String getXrcKmsKeyId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CoreVolumeGroupConfig <a name="CoreVolumeGroupConfig" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_volume_group.CoreVolumeGroupConfig;

CoreVolumeGroupConfig.builder()
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
    .sourceDetails(CoreVolumeGroupSourceDetails)
//  .backupPolicyId(java.lang.String)
//  .clusterPlacementGroupId(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .preserveVolumeReplica(java.lang.Boolean)
//  .preserveVolumeReplica(IResolvable)
//  .timeouts(CoreVolumeGroupTimeouts)
//  .volumeGroupReplicas(IResolvable)
//  .volumeGroupReplicas(java.util.List<CoreVolumeGroupVolumeGroupReplicas>)
//  .volumeGroupReplicasDeletion(java.lang.Boolean)
//  .volumeGroupReplicasDeletion(IResolvable)
//  .volumeIds(java.util.List<java.lang.String>)
//  .xrcKmsKeyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#availability_domain CoreVolumeGroup#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#compartment_id CoreVolumeGroup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.sourceDetails">sourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails">CoreVolumeGroupSourceDetails</a></code> | source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.backupPolicyId">backupPolicyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#backup_policy_id CoreVolumeGroup#backup_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.clusterPlacementGroupId">clusterPlacementGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#cluster_placement_group_id CoreVolumeGroup#cluster_placement_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#defined_tags CoreVolumeGroup#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#display_name CoreVolumeGroup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#freeform_tags CoreVolumeGroup#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#id CoreVolumeGroup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.preserveVolumeReplica">preserveVolumeReplica</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#preserve_volume_replica CoreVolumeGroup#preserve_volume_replica}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts">CoreVolumeGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.volumeGroupReplicas">volumeGroupReplicas</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas">CoreVolumeGroupVolumeGroupReplicas</a>></code> | volume_group_replicas block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.volumeGroupReplicasDeletion">volumeGroupReplicasDeletion</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_group_replicas_deletion CoreVolumeGroup#volume_group_replicas_deletion}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.volumeIds">volumeIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_ids CoreVolumeGroup#volume_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.xrcKmsKeyId">xrcKmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#xrc_kms_key_id CoreVolumeGroup#xrc_kms_key_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#availability_domain CoreVolumeGroup#availability_domain}.

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#compartment_id CoreVolumeGroup#compartment_id}.

---

##### `sourceDetails`<sup>Required</sup> <a name="sourceDetails" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.sourceDetails"></a>

```java
public CoreVolumeGroupSourceDetails getSourceDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails">CoreVolumeGroupSourceDetails</a>

source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#source_details CoreVolumeGroup#source_details}

---

##### `backupPolicyId`<sup>Optional</sup> <a name="backupPolicyId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.backupPolicyId"></a>

```java
public java.lang.String getBackupPolicyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#backup_policy_id CoreVolumeGroup#backup_policy_id}.

---

##### `clusterPlacementGroupId`<sup>Optional</sup> <a name="clusterPlacementGroupId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.clusterPlacementGroupId"></a>

```java
public java.lang.String getClusterPlacementGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#cluster_placement_group_id CoreVolumeGroup#cluster_placement_group_id}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#defined_tags CoreVolumeGroup#defined_tags}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#display_name CoreVolumeGroup#display_name}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#freeform_tags CoreVolumeGroup#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#id CoreVolumeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `preserveVolumeReplica`<sup>Optional</sup> <a name="preserveVolumeReplica" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.preserveVolumeReplica"></a>

```java
public java.lang.Object getPreserveVolumeReplica();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#preserve_volume_replica CoreVolumeGroup#preserve_volume_replica}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.timeouts"></a>

```java
public CoreVolumeGroupTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts">CoreVolumeGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#timeouts CoreVolumeGroup#timeouts}

---

##### `volumeGroupReplicas`<sup>Optional</sup> <a name="volumeGroupReplicas" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.volumeGroupReplicas"></a>

```java
public java.lang.Object getVolumeGroupReplicas();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas">CoreVolumeGroupVolumeGroupReplicas</a>>

volume_group_replicas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_group_replicas CoreVolumeGroup#volume_group_replicas}

---

##### `volumeGroupReplicasDeletion`<sup>Optional</sup> <a name="volumeGroupReplicasDeletion" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.volumeGroupReplicasDeletion"></a>

```java
public java.lang.Object getVolumeGroupReplicasDeletion();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_group_replicas_deletion CoreVolumeGroup#volume_group_replicas_deletion}.

---

##### `volumeIds`<sup>Optional</sup> <a name="volumeIds" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.volumeIds"></a>

```java
public java.util.List<java.lang.String> getVolumeIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_ids CoreVolumeGroup#volume_ids}.

---

##### `xrcKmsKeyId`<sup>Optional</sup> <a name="xrcKmsKeyId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.xrcKmsKeyId"></a>

```java
public java.lang.String getXrcKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#xrc_kms_key_id CoreVolumeGroup#xrc_kms_key_id}.

---

### CoreVolumeGroupSourceDetails <a name="CoreVolumeGroupSourceDetails" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_volume_group.CoreVolumeGroupSourceDetails;

CoreVolumeGroupSourceDetails.builder()
    .type(java.lang.String)
//  .volumeGroupBackupId(java.lang.String)
//  .volumeGroupId(java.lang.String)
//  .volumeGroupReplicaId(java.lang.String)
//  .volumeIds(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails.property.type">type</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#type CoreVolumeGroup#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails.property.volumeGroupBackupId">volumeGroupBackupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_group_backup_id CoreVolumeGroup#volume_group_backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails.property.volumeGroupId">volumeGroupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_group_id CoreVolumeGroup#volume_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails.property.volumeGroupReplicaId">volumeGroupReplicaId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_group_replica_id CoreVolumeGroup#volume_group_replica_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails.property.volumeIds">volumeIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_ids CoreVolumeGroup#volume_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#type CoreVolumeGroup#type}.

---

##### `volumeGroupBackupId`<sup>Optional</sup> <a name="volumeGroupBackupId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails.property.volumeGroupBackupId"></a>

```java
public java.lang.String getVolumeGroupBackupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_group_backup_id CoreVolumeGroup#volume_group_backup_id}.

---

##### `volumeGroupId`<sup>Optional</sup> <a name="volumeGroupId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails.property.volumeGroupId"></a>

```java
public java.lang.String getVolumeGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_group_id CoreVolumeGroup#volume_group_id}.

---

##### `volumeGroupReplicaId`<sup>Optional</sup> <a name="volumeGroupReplicaId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails.property.volumeGroupReplicaId"></a>

```java
public java.lang.String getVolumeGroupReplicaId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_group_replica_id CoreVolumeGroup#volume_group_replica_id}.

---

##### `volumeIds`<sup>Optional</sup> <a name="volumeIds" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails.property.volumeIds"></a>

```java
public java.util.List<java.lang.String> getVolumeIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_ids CoreVolumeGroup#volume_ids}.

---

### CoreVolumeGroupTimeouts <a name="CoreVolumeGroupTimeouts" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_volume_group.CoreVolumeGroupTimeouts;

CoreVolumeGroupTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#create CoreVolumeGroup#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#delete CoreVolumeGroup#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#update CoreVolumeGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#create CoreVolumeGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#delete CoreVolumeGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#update CoreVolumeGroup#update}.

---

### CoreVolumeGroupVolumeGroupReplicas <a name="CoreVolumeGroupVolumeGroupReplicas" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_volume_group.CoreVolumeGroupVolumeGroupReplicas;

CoreVolumeGroupVolumeGroupReplicas.builder()
    .availabilityDomain(java.lang.String)
//  .displayName(java.lang.String)
//  .xrrKmsKeyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#availability_domain CoreVolumeGroup#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#display_name CoreVolumeGroup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas.property.xrrKmsKeyId">xrrKmsKeyId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#xrr_kms_key_id CoreVolumeGroup#xrr_kms_key_id}. |

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#availability_domain CoreVolumeGroup#availability_domain}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#display_name CoreVolumeGroup#display_name}.

---

##### `xrrKmsKeyId`<sup>Optional</sup> <a name="xrrKmsKeyId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas.property.xrrKmsKeyId"></a>

```java
public java.lang.String getXrrKmsKeyId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#xrr_kms_key_id CoreVolumeGroup#xrr_kms_key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreVolumeGroupSourceDetailsOutputReference <a name="CoreVolumeGroupSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_volume_group.CoreVolumeGroupSourceDetailsOutputReference;

new CoreVolumeGroupSourceDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.resetVolumeGroupBackupId">resetVolumeGroupBackupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.resetVolumeGroupId">resetVolumeGroupId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.resetVolumeGroupReplicaId">resetVolumeGroupReplicaId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.resetVolumeIds">resetVolumeIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetVolumeGroupBackupId` <a name="resetVolumeGroupBackupId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.resetVolumeGroupBackupId"></a>

```java
public void resetVolumeGroupBackupId()
```

##### `resetVolumeGroupId` <a name="resetVolumeGroupId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.resetVolumeGroupId"></a>

```java
public void resetVolumeGroupId()
```

##### `resetVolumeGroupReplicaId` <a name="resetVolumeGroupReplicaId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.resetVolumeGroupReplicaId"></a>

```java
public void resetVolumeGroupReplicaId()
```

##### `resetVolumeIds` <a name="resetVolumeIds" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.resetVolumeIds"></a>

```java
public void resetVolumeIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeGroupBackupIdInput">volumeGroupBackupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeGroupIdInput">volumeGroupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeGroupReplicaIdInput">volumeGroupReplicaIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeIdsInput">volumeIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeGroupBackupId">volumeGroupBackupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeGroupId">volumeGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeGroupReplicaId">volumeGroupReplicaId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeIds">volumeIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails">CoreVolumeGroupSourceDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `volumeGroupBackupIdInput`<sup>Optional</sup> <a name="volumeGroupBackupIdInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeGroupBackupIdInput"></a>

```java
public java.lang.String getVolumeGroupBackupIdInput();
```

- *Type:* java.lang.String

---

##### `volumeGroupIdInput`<sup>Optional</sup> <a name="volumeGroupIdInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeGroupIdInput"></a>

```java
public java.lang.String getVolumeGroupIdInput();
```

- *Type:* java.lang.String

---

##### `volumeGroupReplicaIdInput`<sup>Optional</sup> <a name="volumeGroupReplicaIdInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeGroupReplicaIdInput"></a>

```java
public java.lang.String getVolumeGroupReplicaIdInput();
```

- *Type:* java.lang.String

---

##### `volumeIdsInput`<sup>Optional</sup> <a name="volumeIdsInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeIdsInput"></a>

```java
public java.util.List<java.lang.String> getVolumeIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `volumeGroupBackupId`<sup>Required</sup> <a name="volumeGroupBackupId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeGroupBackupId"></a>

```java
public java.lang.String getVolumeGroupBackupId();
```

- *Type:* java.lang.String

---

##### `volumeGroupId`<sup>Required</sup> <a name="volumeGroupId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeGroupId"></a>

```java
public java.lang.String getVolumeGroupId();
```

- *Type:* java.lang.String

---

##### `volumeGroupReplicaId`<sup>Required</sup> <a name="volumeGroupReplicaId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeGroupReplicaId"></a>

```java
public java.lang.String getVolumeGroupReplicaId();
```

- *Type:* java.lang.String

---

##### `volumeIds`<sup>Required</sup> <a name="volumeIds" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeIds"></a>

```java
public java.util.List<java.lang.String> getVolumeIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.internalValue"></a>

```java
public CoreVolumeGroupSourceDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails">CoreVolumeGroupSourceDetails</a>

---


### CoreVolumeGroupTimeoutsOutputReference <a name="CoreVolumeGroupTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_volume_group.CoreVolumeGroupTimeoutsOutputReference;

new CoreVolumeGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts">CoreVolumeGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts">CoreVolumeGroupTimeouts</a>

---


### CoreVolumeGroupVolumeGroupReplicasList <a name="CoreVolumeGroupVolumeGroupReplicasList" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_volume_group.CoreVolumeGroupVolumeGroupReplicasList;

new CoreVolumeGroupVolumeGroupReplicasList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.get"></a>

```java
public CoreVolumeGroupVolumeGroupReplicasOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas">CoreVolumeGroupVolumeGroupReplicas</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas">CoreVolumeGroupVolumeGroupReplicas</a>>

---


### CoreVolumeGroupVolumeGroupReplicasOutputReference <a name="CoreVolumeGroupVolumeGroupReplicasOutputReference" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.core_volume_group.CoreVolumeGroupVolumeGroupReplicasOutputReference;

new CoreVolumeGroupVolumeGroupReplicasOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.resetXrrKmsKeyId">resetXrrKmsKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetXrrKmsKeyId` <a name="resetXrrKmsKeyId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.resetXrrKmsKeyId"></a>

```java
public void resetXrrKmsKeyId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.volumeGroupReplicaId">volumeGroupReplicaId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.xrrKmsKeyIdInput">xrrKmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.xrrKmsKeyId">xrrKmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas">CoreVolumeGroupVolumeGroupReplicas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `volumeGroupReplicaId`<sup>Required</sup> <a name="volumeGroupReplicaId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.volumeGroupReplicaId"></a>

```java
public java.lang.String getVolumeGroupReplicaId();
```

- *Type:* java.lang.String

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.availabilityDomainInput"></a>

```java
public java.lang.String getAvailabilityDomainInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `xrrKmsKeyIdInput`<sup>Optional</sup> <a name="xrrKmsKeyIdInput" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.xrrKmsKeyIdInput"></a>

```java
public java.lang.String getXrrKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `xrrKmsKeyId`<sup>Required</sup> <a name="xrrKmsKeyId" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.xrrKmsKeyId"></a>

```java
public java.lang.String getXrrKmsKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas">CoreVolumeGroupVolumeGroupReplicas</a>

---



