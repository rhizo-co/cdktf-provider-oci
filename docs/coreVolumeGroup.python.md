# `coreVolumeGroup` Submodule <a name="`coreVolumeGroup` Submodule" id="rhizo-co-terraform-provider-oci.coreVolumeGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreVolumeGroup <a name="CoreVolumeGroup" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group oci_core_volume_group}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume_group

coreVolumeGroup.CoreVolumeGroup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_domain: str,
  compartment_id: str,
  source_details: CoreVolumeGroupSourceDetails,
  backup_policy_id: str = None,
  cluster_placement_group_id: str = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  preserve_volume_replica: typing.Union[bool, IResolvable] = None,
  timeouts: CoreVolumeGroupTimeouts = None,
  volume_group_replicas: typing.Union[IResolvable, typing.List[CoreVolumeGroupVolumeGroupReplicas]] = None,
  volume_group_replicas_deletion: typing.Union[bool, IResolvable] = None,
  volume_ids: typing.List[str] = None,
  xrc_kms_key_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#availability_domain CoreVolumeGroup#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#compartment_id CoreVolumeGroup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.sourceDetails">source_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails">CoreVolumeGroupSourceDetails</a></code> | source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.backupPolicyId">backup_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#backup_policy_id CoreVolumeGroup#backup_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.clusterPlacementGroupId">cluster_placement_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#cluster_placement_group_id CoreVolumeGroup#cluster_placement_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#defined_tags CoreVolumeGroup#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#display_name CoreVolumeGroup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#freeform_tags CoreVolumeGroup#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#id CoreVolumeGroup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.preserveVolumeReplica">preserve_volume_replica</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#preserve_volume_replica CoreVolumeGroup#preserve_volume_replica}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts">CoreVolumeGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.volumeGroupReplicas">volume_group_replicas</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas">CoreVolumeGroupVolumeGroupReplicas</a>]]</code> | volume_group_replicas block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.volumeGroupReplicasDeletion">volume_group_replicas_deletion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_group_replicas_deletion CoreVolumeGroup#volume_group_replicas_deletion}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.volumeIds">volume_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_ids CoreVolumeGroup#volume_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.xrcKmsKeyId">xrc_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#xrc_kms_key_id CoreVolumeGroup#xrc_kms_key_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#availability_domain CoreVolumeGroup#availability_domain}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#compartment_id CoreVolumeGroup#compartment_id}.

---

##### `source_details`<sup>Required</sup> <a name="source_details" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.sourceDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails">CoreVolumeGroupSourceDetails</a>

source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#source_details CoreVolumeGroup#source_details}

---

##### `backup_policy_id`<sup>Optional</sup> <a name="backup_policy_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.backupPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#backup_policy_id CoreVolumeGroup#backup_policy_id}.

---

##### `cluster_placement_group_id`<sup>Optional</sup> <a name="cluster_placement_group_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.clusterPlacementGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#cluster_placement_group_id CoreVolumeGroup#cluster_placement_group_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#defined_tags CoreVolumeGroup#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#display_name CoreVolumeGroup#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#freeform_tags CoreVolumeGroup#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#id CoreVolumeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `preserve_volume_replica`<sup>Optional</sup> <a name="preserve_volume_replica" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.preserveVolumeReplica"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#preserve_volume_replica CoreVolumeGroup#preserve_volume_replica}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts">CoreVolumeGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#timeouts CoreVolumeGroup#timeouts}

---

##### `volume_group_replicas`<sup>Optional</sup> <a name="volume_group_replicas" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.volumeGroupReplicas"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas">CoreVolumeGroupVolumeGroupReplicas</a>]]

volume_group_replicas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_group_replicas CoreVolumeGroup#volume_group_replicas}

---

##### `volume_group_replicas_deletion`<sup>Optional</sup> <a name="volume_group_replicas_deletion" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.volumeGroupReplicasDeletion"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_group_replicas_deletion CoreVolumeGroup#volume_group_replicas_deletion}.

---

##### `volume_ids`<sup>Optional</sup> <a name="volume_ids" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.volumeIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_ids CoreVolumeGroup#volume_ids}.

---

##### `xrc_kms_key_id`<sup>Optional</sup> <a name="xrc_kms_key_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.Initializer.parameter.xrcKmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#xrc_kms_key_id CoreVolumeGroup#xrc_kms_key_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.putSourceDetails">put_source_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.putVolumeGroupReplicas">put_volume_group_replicas</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetBackupPolicyId">reset_backup_policy_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetClusterPlacementGroupId">reset_cluster_placement_group_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetPreserveVolumeReplica">reset_preserve_volume_replica</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetVolumeGroupReplicas">reset_volume_group_replicas</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetVolumeGroupReplicasDeletion">reset_volume_group_replicas_deletion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetVolumeIds">reset_volume_ids</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetXrcKmsKeyId">reset_xrc_kms_key_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_source_details` <a name="put_source_details" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.putSourceDetails"></a>

```python
def put_source_details(
  type: str,
  volume_group_backup_id: str = None,
  volume_group_id: str = None,
  volume_group_replica_id: str = None,
  volume_ids: typing.List[str] = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.putSourceDetails.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#type CoreVolumeGroup#type}.

---

###### `volume_group_backup_id`<sup>Optional</sup> <a name="volume_group_backup_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.putSourceDetails.parameter.volumeGroupBackupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_group_backup_id CoreVolumeGroup#volume_group_backup_id}.

---

###### `volume_group_id`<sup>Optional</sup> <a name="volume_group_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.putSourceDetails.parameter.volumeGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_group_id CoreVolumeGroup#volume_group_id}.

---

###### `volume_group_replica_id`<sup>Optional</sup> <a name="volume_group_replica_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.putSourceDetails.parameter.volumeGroupReplicaId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_group_replica_id CoreVolumeGroup#volume_group_replica_id}.

---

###### `volume_ids`<sup>Optional</sup> <a name="volume_ids" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.putSourceDetails.parameter.volumeIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_ids CoreVolumeGroup#volume_ids}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#create CoreVolumeGroup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#delete CoreVolumeGroup#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#update CoreVolumeGroup#update}.

---

##### `put_volume_group_replicas` <a name="put_volume_group_replicas" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.putVolumeGroupReplicas"></a>

```python
def put_volume_group_replicas(
  value: typing.Union[IResolvable, typing.List[CoreVolumeGroupVolumeGroupReplicas]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.putVolumeGroupReplicas.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas">CoreVolumeGroupVolumeGroupReplicas</a>]]

---

##### `reset_backup_policy_id` <a name="reset_backup_policy_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetBackupPolicyId"></a>

```python
def reset_backup_policy_id() -> None
```

##### `reset_cluster_placement_group_id` <a name="reset_cluster_placement_group_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetClusterPlacementGroupId"></a>

```python
def reset_cluster_placement_group_id() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_preserve_volume_replica` <a name="reset_preserve_volume_replica" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetPreserveVolumeReplica"></a>

```python
def reset_preserve_volume_replica() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_volume_group_replicas` <a name="reset_volume_group_replicas" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetVolumeGroupReplicas"></a>

```python
def reset_volume_group_replicas() -> None
```

##### `reset_volume_group_replicas_deletion` <a name="reset_volume_group_replicas_deletion" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetVolumeGroupReplicasDeletion"></a>

```python
def reset_volume_group_replicas_deletion() -> None
```

##### `reset_volume_ids` <a name="reset_volume_ids" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetVolumeIds"></a>

```python
def reset_volume_ids() -> None
```

##### `reset_xrc_kms_key_id` <a name="reset_xrc_kms_key_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.resetXrcKmsKeyId"></a>

```python
def reset_xrc_kms_key_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CoreVolumeGroup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume_group

coreVolumeGroup.CoreVolumeGroup.is_construct(
  x: typing.Any
)
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

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume_group

coreVolumeGroup.CoreVolumeGroup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume_group

coreVolumeGroup.CoreVolumeGroup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume_group

coreVolumeGroup.CoreVolumeGroup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CoreVolumeGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CoreVolumeGroup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CoreVolumeGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CoreVolumeGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.isHydrated">is_hydrated</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.sizeInGbs">size_in_gbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.sizeInMbs">size_in_mbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.sourceDetails">source_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference">CoreVolumeGroupSourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference">CoreVolumeGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.volumeGroupReplicas">volume_group_replicas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList">CoreVolumeGroupVolumeGroupReplicasList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.backupPolicyIdInput">backup_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.clusterPlacementGroupIdInput">cluster_placement_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.preserveVolumeReplicaInput">preserve_volume_replica_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.sourceDetailsInput">source_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails">CoreVolumeGroupSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts">CoreVolumeGroupTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.volumeGroupReplicasDeletionInput">volume_group_replicas_deletion_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.volumeGroupReplicasInput">volume_group_replicas_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas">CoreVolumeGroupVolumeGroupReplicas</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.volumeIdsInput">volume_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.xrcKmsKeyIdInput">xrc_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.backupPolicyId">backup_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.clusterPlacementGroupId">cluster_placement_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.preserveVolumeReplica">preserve_volume_replica</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.volumeGroupReplicasDeletion">volume_group_replicas_deletion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.volumeIds">volume_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.xrcKmsKeyId">xrc_kms_key_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `is_hydrated`<sup>Required</sup> <a name="is_hydrated" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.isHydrated"></a>

```python
is_hydrated: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `size_in_gbs`<sup>Required</sup> <a name="size_in_gbs" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.sizeInGbs"></a>

```python
size_in_gbs: str
```

- *Type:* str

---

##### `size_in_mbs`<sup>Required</sup> <a name="size_in_mbs" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.sizeInMbs"></a>

```python
size_in_mbs: str
```

- *Type:* str

---

##### `source_details`<sup>Required</sup> <a name="source_details" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.sourceDetails"></a>

```python
source_details: CoreVolumeGroupSourceDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference">CoreVolumeGroupSourceDetailsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.timeouts"></a>

```python
timeouts: CoreVolumeGroupTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference">CoreVolumeGroupTimeoutsOutputReference</a>

---

##### `volume_group_replicas`<sup>Required</sup> <a name="volume_group_replicas" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.volumeGroupReplicas"></a>

```python
volume_group_replicas: CoreVolumeGroupVolumeGroupReplicasList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList">CoreVolumeGroupVolumeGroupReplicasList</a>

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `backup_policy_id_input`<sup>Optional</sup> <a name="backup_policy_id_input" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.backupPolicyIdInput"></a>

```python
backup_policy_id_input: str
```

- *Type:* str

---

##### `cluster_placement_group_id_input`<sup>Optional</sup> <a name="cluster_placement_group_id_input" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.clusterPlacementGroupIdInput"></a>

```python
cluster_placement_group_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `preserve_volume_replica_input`<sup>Optional</sup> <a name="preserve_volume_replica_input" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.preserveVolumeReplicaInput"></a>

```python
preserve_volume_replica_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `source_details_input`<sup>Optional</sup> <a name="source_details_input" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.sourceDetailsInput"></a>

```python
source_details_input: CoreVolumeGroupSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails">CoreVolumeGroupSourceDetails</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CoreVolumeGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts">CoreVolumeGroupTimeouts</a>]

---

##### `volume_group_replicas_deletion_input`<sup>Optional</sup> <a name="volume_group_replicas_deletion_input" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.volumeGroupReplicasDeletionInput"></a>

```python
volume_group_replicas_deletion_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `volume_group_replicas_input`<sup>Optional</sup> <a name="volume_group_replicas_input" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.volumeGroupReplicasInput"></a>

```python
volume_group_replicas_input: typing.Union[IResolvable, typing.List[CoreVolumeGroupVolumeGroupReplicas]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas">CoreVolumeGroupVolumeGroupReplicas</a>]]

---

##### `volume_ids_input`<sup>Optional</sup> <a name="volume_ids_input" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.volumeIdsInput"></a>

```python
volume_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `xrc_kms_key_id_input`<sup>Optional</sup> <a name="xrc_kms_key_id_input" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.xrcKmsKeyIdInput"></a>

```python
xrc_kms_key_id_input: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `backup_policy_id`<sup>Required</sup> <a name="backup_policy_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.backupPolicyId"></a>

```python
backup_policy_id: str
```

- *Type:* str

---

##### `cluster_placement_group_id`<sup>Required</sup> <a name="cluster_placement_group_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.clusterPlacementGroupId"></a>

```python
cluster_placement_group_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `preserve_volume_replica`<sup>Required</sup> <a name="preserve_volume_replica" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.preserveVolumeReplica"></a>

```python
preserve_volume_replica: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `volume_group_replicas_deletion`<sup>Required</sup> <a name="volume_group_replicas_deletion" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.volumeGroupReplicasDeletion"></a>

```python
volume_group_replicas_deletion: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `volume_ids`<sup>Required</sup> <a name="volume_ids" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.volumeIds"></a>

```python
volume_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `xrc_kms_key_id`<sup>Required</sup> <a name="xrc_kms_key_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.xrcKmsKeyId"></a>

```python
xrc_kms_key_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CoreVolumeGroupConfig <a name="CoreVolumeGroupConfig" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume_group

coreVolumeGroup.CoreVolumeGroupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_domain: str,
  compartment_id: str,
  source_details: CoreVolumeGroupSourceDetails,
  backup_policy_id: str = None,
  cluster_placement_group_id: str = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  preserve_volume_replica: typing.Union[bool, IResolvable] = None,
  timeouts: CoreVolumeGroupTimeouts = None,
  volume_group_replicas: typing.Union[IResolvable, typing.List[CoreVolumeGroupVolumeGroupReplicas]] = None,
  volume_group_replicas_deletion: typing.Union[bool, IResolvable] = None,
  volume_ids: typing.List[str] = None,
  xrc_kms_key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#availability_domain CoreVolumeGroup#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#compartment_id CoreVolumeGroup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.sourceDetails">source_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails">CoreVolumeGroupSourceDetails</a></code> | source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.backupPolicyId">backup_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#backup_policy_id CoreVolumeGroup#backup_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.clusterPlacementGroupId">cluster_placement_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#cluster_placement_group_id CoreVolumeGroup#cluster_placement_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#defined_tags CoreVolumeGroup#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#display_name CoreVolumeGroup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#freeform_tags CoreVolumeGroup#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#id CoreVolumeGroup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.preserveVolumeReplica">preserve_volume_replica</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#preserve_volume_replica CoreVolumeGroup#preserve_volume_replica}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts">CoreVolumeGroupTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.volumeGroupReplicas">volume_group_replicas</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas">CoreVolumeGroupVolumeGroupReplicas</a>]]</code> | volume_group_replicas block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.volumeGroupReplicasDeletion">volume_group_replicas_deletion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_group_replicas_deletion CoreVolumeGroup#volume_group_replicas_deletion}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.volumeIds">volume_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_ids CoreVolumeGroup#volume_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.xrcKmsKeyId">xrc_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#xrc_kms_key_id CoreVolumeGroup#xrc_kms_key_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#availability_domain CoreVolumeGroup#availability_domain}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#compartment_id CoreVolumeGroup#compartment_id}.

---

##### `source_details`<sup>Required</sup> <a name="source_details" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.sourceDetails"></a>

```python
source_details: CoreVolumeGroupSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails">CoreVolumeGroupSourceDetails</a>

source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#source_details CoreVolumeGroup#source_details}

---

##### `backup_policy_id`<sup>Optional</sup> <a name="backup_policy_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.backupPolicyId"></a>

```python
backup_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#backup_policy_id CoreVolumeGroup#backup_policy_id}.

---

##### `cluster_placement_group_id`<sup>Optional</sup> <a name="cluster_placement_group_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.clusterPlacementGroupId"></a>

```python
cluster_placement_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#cluster_placement_group_id CoreVolumeGroup#cluster_placement_group_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#defined_tags CoreVolumeGroup#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#display_name CoreVolumeGroup#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#freeform_tags CoreVolumeGroup#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#id CoreVolumeGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `preserve_volume_replica`<sup>Optional</sup> <a name="preserve_volume_replica" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.preserveVolumeReplica"></a>

```python
preserve_volume_replica: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#preserve_volume_replica CoreVolumeGroup#preserve_volume_replica}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.timeouts"></a>

```python
timeouts: CoreVolumeGroupTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts">CoreVolumeGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#timeouts CoreVolumeGroup#timeouts}

---

##### `volume_group_replicas`<sup>Optional</sup> <a name="volume_group_replicas" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.volumeGroupReplicas"></a>

```python
volume_group_replicas: typing.Union[IResolvable, typing.List[CoreVolumeGroupVolumeGroupReplicas]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas">CoreVolumeGroupVolumeGroupReplicas</a>]]

volume_group_replicas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_group_replicas CoreVolumeGroup#volume_group_replicas}

---

##### `volume_group_replicas_deletion`<sup>Optional</sup> <a name="volume_group_replicas_deletion" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.volumeGroupReplicasDeletion"></a>

```python
volume_group_replicas_deletion: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_group_replicas_deletion CoreVolumeGroup#volume_group_replicas_deletion}.

---

##### `volume_ids`<sup>Optional</sup> <a name="volume_ids" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.volumeIds"></a>

```python
volume_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_ids CoreVolumeGroup#volume_ids}.

---

##### `xrc_kms_key_id`<sup>Optional</sup> <a name="xrc_kms_key_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupConfig.property.xrcKmsKeyId"></a>

```python
xrc_kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#xrc_kms_key_id CoreVolumeGroup#xrc_kms_key_id}.

---

### CoreVolumeGroupSourceDetails <a name="CoreVolumeGroupSourceDetails" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume_group

coreVolumeGroup.CoreVolumeGroupSourceDetails(
  type: str,
  volume_group_backup_id: str = None,
  volume_group_id: str = None,
  volume_group_replica_id: str = None,
  volume_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#type CoreVolumeGroup#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails.property.volumeGroupBackupId">volume_group_backup_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_group_backup_id CoreVolumeGroup#volume_group_backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails.property.volumeGroupId">volume_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_group_id CoreVolumeGroup#volume_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails.property.volumeGroupReplicaId">volume_group_replica_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_group_replica_id CoreVolumeGroup#volume_group_replica_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails.property.volumeIds">volume_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_ids CoreVolumeGroup#volume_ids}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#type CoreVolumeGroup#type}.

---

##### `volume_group_backup_id`<sup>Optional</sup> <a name="volume_group_backup_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails.property.volumeGroupBackupId"></a>

```python
volume_group_backup_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_group_backup_id CoreVolumeGroup#volume_group_backup_id}.

---

##### `volume_group_id`<sup>Optional</sup> <a name="volume_group_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails.property.volumeGroupId"></a>

```python
volume_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_group_id CoreVolumeGroup#volume_group_id}.

---

##### `volume_group_replica_id`<sup>Optional</sup> <a name="volume_group_replica_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails.property.volumeGroupReplicaId"></a>

```python
volume_group_replica_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_group_replica_id CoreVolumeGroup#volume_group_replica_id}.

---

##### `volume_ids`<sup>Optional</sup> <a name="volume_ids" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails.property.volumeIds"></a>

```python
volume_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#volume_ids CoreVolumeGroup#volume_ids}.

---

### CoreVolumeGroupTimeouts <a name="CoreVolumeGroupTimeouts" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume_group

coreVolumeGroup.CoreVolumeGroupTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#create CoreVolumeGroup#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#delete CoreVolumeGroup#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#update CoreVolumeGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#create CoreVolumeGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#delete CoreVolumeGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#update CoreVolumeGroup#update}.

---

### CoreVolumeGroupVolumeGroupReplicas <a name="CoreVolumeGroupVolumeGroupReplicas" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume_group

coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas(
  availability_domain: str,
  display_name: str = None,
  xrr_kms_key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#availability_domain CoreVolumeGroup#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#display_name CoreVolumeGroup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas.property.xrrKmsKeyId">xrr_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#xrr_kms_key_id CoreVolumeGroup#xrr_kms_key_id}. |

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#availability_domain CoreVolumeGroup#availability_domain}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#display_name CoreVolumeGroup#display_name}.

---

##### `xrr_kms_key_id`<sup>Optional</sup> <a name="xrr_kms_key_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas.property.xrrKmsKeyId"></a>

```python
xrr_kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group#xrr_kms_key_id CoreVolumeGroup#xrr_kms_key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreVolumeGroupSourceDetailsOutputReference <a name="CoreVolumeGroupSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume_group

coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.resetVolumeGroupBackupId">reset_volume_group_backup_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.resetVolumeGroupId">reset_volume_group_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.resetVolumeGroupReplicaId">reset_volume_group_replica_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.resetVolumeIds">reset_volume_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_volume_group_backup_id` <a name="reset_volume_group_backup_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.resetVolumeGroupBackupId"></a>

```python
def reset_volume_group_backup_id() -> None
```

##### `reset_volume_group_id` <a name="reset_volume_group_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.resetVolumeGroupId"></a>

```python
def reset_volume_group_id() -> None
```

##### `reset_volume_group_replica_id` <a name="reset_volume_group_replica_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.resetVolumeGroupReplicaId"></a>

```python
def reset_volume_group_replica_id() -> None
```

##### `reset_volume_ids` <a name="reset_volume_ids" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.resetVolumeIds"></a>

```python
def reset_volume_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeGroupBackupIdInput">volume_group_backup_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeGroupIdInput">volume_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeGroupReplicaIdInput">volume_group_replica_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeIdsInput">volume_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeGroupBackupId">volume_group_backup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeGroupId">volume_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeGroupReplicaId">volume_group_replica_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeIds">volume_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails">CoreVolumeGroupSourceDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `volume_group_backup_id_input`<sup>Optional</sup> <a name="volume_group_backup_id_input" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeGroupBackupIdInput"></a>

```python
volume_group_backup_id_input: str
```

- *Type:* str

---

##### `volume_group_id_input`<sup>Optional</sup> <a name="volume_group_id_input" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeGroupIdInput"></a>

```python
volume_group_id_input: str
```

- *Type:* str

---

##### `volume_group_replica_id_input`<sup>Optional</sup> <a name="volume_group_replica_id_input" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeGroupReplicaIdInput"></a>

```python
volume_group_replica_id_input: str
```

- *Type:* str

---

##### `volume_ids_input`<sup>Optional</sup> <a name="volume_ids_input" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeIdsInput"></a>

```python
volume_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `volume_group_backup_id`<sup>Required</sup> <a name="volume_group_backup_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeGroupBackupId"></a>

```python
volume_group_backup_id: str
```

- *Type:* str

---

##### `volume_group_id`<sup>Required</sup> <a name="volume_group_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeGroupId"></a>

```python
volume_group_id: str
```

- *Type:* str

---

##### `volume_group_replica_id`<sup>Required</sup> <a name="volume_group_replica_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeGroupReplicaId"></a>

```python
volume_group_replica_id: str
```

- *Type:* str

---

##### `volume_ids`<sup>Required</sup> <a name="volume_ids" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.volumeIds"></a>

```python
volume_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetailsOutputReference.property.internalValue"></a>

```python
internal_value: CoreVolumeGroupSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupSourceDetails">CoreVolumeGroupSourceDetails</a>

---


### CoreVolumeGroupTimeoutsOutputReference <a name="CoreVolumeGroupTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume_group

coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts">CoreVolumeGroupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CoreVolumeGroupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupTimeouts">CoreVolumeGroupTimeouts</a>]

---


### CoreVolumeGroupVolumeGroupReplicasList <a name="CoreVolumeGroupVolumeGroupReplicasList" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume_group

coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CoreVolumeGroupVolumeGroupReplicasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas">CoreVolumeGroupVolumeGroupReplicas</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CoreVolumeGroupVolumeGroupReplicas]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas">CoreVolumeGroupVolumeGroupReplicas</a>]]

---


### CoreVolumeGroupVolumeGroupReplicasOutputReference <a name="CoreVolumeGroupVolumeGroupReplicasOutputReference" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume_group

coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.resetXrrKmsKeyId">reset_xrr_kms_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_xrr_kms_key_id` <a name="reset_xrr_kms_key_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.resetXrrKmsKeyId"></a>

```python
def reset_xrr_kms_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.volumeGroupReplicaId">volume_group_replica_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.xrrKmsKeyIdInput">xrr_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.xrrKmsKeyId">xrr_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas">CoreVolumeGroupVolumeGroupReplicas</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `volume_group_replica_id`<sup>Required</sup> <a name="volume_group_replica_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.volumeGroupReplicaId"></a>

```python
volume_group_replica_id: str
```

- *Type:* str

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `xrr_kms_key_id_input`<sup>Optional</sup> <a name="xrr_kms_key_id_input" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.xrrKmsKeyIdInput"></a>

```python
xrr_kms_key_id_input: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `xrr_kms_key_id`<sup>Required</sup> <a name="xrr_kms_key_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.xrrKmsKeyId"></a>

```python
xrr_kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicasOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CoreVolumeGroupVolumeGroupReplicas]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroup.CoreVolumeGroupVolumeGroupReplicas">CoreVolumeGroupVolumeGroupReplicas</a>]

---



