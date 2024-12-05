# `coreVolume` Submodule <a name="`coreVolume` Submodule" id="rhizo-co-terraform-provider-oci.coreVolume"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreVolume <a name="CoreVolume" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume oci_core_volume}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume

coreVolume.CoreVolume(
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
  autotune_policies: typing.Union[IResolvable, typing.List[CoreVolumeAutotunePolicies]] = None,
  backup_policy_id: str = None,
  block_volume_replicas: typing.Union[IResolvable, typing.List[CoreVolumeBlockVolumeReplicas]] = None,
  block_volume_replicas_deletion: typing.Union[bool, IResolvable] = None,
  cluster_placement_group_id: str = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_auto_tune_enabled: typing.Union[bool, IResolvable] = None,
  kms_key_id: str = None,
  size_in_gbs: str = None,
  size_in_mbs: str = None,
  source_details: CoreVolumeSourceDetails = None,
  timeouts: CoreVolumeTimeouts = None,
  volume_backup_id: str = None,
  vpus_per_gb: str = None,
  xrc_kms_key_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#availability_domain CoreVolume#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#compartment_id CoreVolume#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.autotunePolicies">autotune_policies</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePolicies">CoreVolumeAutotunePolicies</a>]]</code> | autotune_policies block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.backupPolicyId">backup_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#backup_policy_id CoreVolume#backup_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.blockVolumeReplicas">block_volume_replicas</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicas">CoreVolumeBlockVolumeReplicas</a>]]</code> | block_volume_replicas block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.blockVolumeReplicasDeletion">block_volume_replicas_deletion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#block_volume_replicas_deletion CoreVolume#block_volume_replicas_deletion}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.clusterPlacementGroupId">cluster_placement_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#cluster_placement_group_id CoreVolume#cluster_placement_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#defined_tags CoreVolume#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#display_name CoreVolume#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#freeform_tags CoreVolume#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#id CoreVolume#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.isAutoTuneEnabled">is_auto_tune_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#is_auto_tune_enabled CoreVolume#is_auto_tune_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#kms_key_id CoreVolume#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.sizeInGbs">size_in_gbs</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#size_in_gbs CoreVolume#size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.sizeInMbs">size_in_mbs</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#size_in_mbs CoreVolume#size_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.sourceDetails">source_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetails">CoreVolumeSourceDetails</a></code> | source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeouts">CoreVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.volumeBackupId">volume_backup_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#volume_backup_id CoreVolume#volume_backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.vpusPerGb">vpus_per_gb</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#vpus_per_gb CoreVolume#vpus_per_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.xrcKmsKeyId">xrc_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#xrc_kms_key_id CoreVolume#xrc_kms_key_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#availability_domain CoreVolume#availability_domain}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#compartment_id CoreVolume#compartment_id}.

---

##### `autotune_policies`<sup>Optional</sup> <a name="autotune_policies" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.autotunePolicies"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePolicies">CoreVolumeAutotunePolicies</a>]]

autotune_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#autotune_policies CoreVolume#autotune_policies}

---

##### `backup_policy_id`<sup>Optional</sup> <a name="backup_policy_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.backupPolicyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#backup_policy_id CoreVolume#backup_policy_id}.

---

##### `block_volume_replicas`<sup>Optional</sup> <a name="block_volume_replicas" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.blockVolumeReplicas"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicas">CoreVolumeBlockVolumeReplicas</a>]]

block_volume_replicas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#block_volume_replicas CoreVolume#block_volume_replicas}

---

##### `block_volume_replicas_deletion`<sup>Optional</sup> <a name="block_volume_replicas_deletion" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.blockVolumeReplicasDeletion"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#block_volume_replicas_deletion CoreVolume#block_volume_replicas_deletion}.

---

##### `cluster_placement_group_id`<sup>Optional</sup> <a name="cluster_placement_group_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.clusterPlacementGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#cluster_placement_group_id CoreVolume#cluster_placement_group_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#defined_tags CoreVolume#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#display_name CoreVolume#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#freeform_tags CoreVolume#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#id CoreVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_auto_tune_enabled`<sup>Optional</sup> <a name="is_auto_tune_enabled" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.isAutoTuneEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#is_auto_tune_enabled CoreVolume#is_auto_tune_enabled}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#kms_key_id CoreVolume#kms_key_id}.

---

##### `size_in_gbs`<sup>Optional</sup> <a name="size_in_gbs" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.sizeInGbs"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#size_in_gbs CoreVolume#size_in_gbs}.

---

##### `size_in_mbs`<sup>Optional</sup> <a name="size_in_mbs" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.sizeInMbs"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#size_in_mbs CoreVolume#size_in_mbs}.

---

##### `source_details`<sup>Optional</sup> <a name="source_details" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.sourceDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetails">CoreVolumeSourceDetails</a>

source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#source_details CoreVolume#source_details}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeouts">CoreVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#timeouts CoreVolume#timeouts}

---

##### `volume_backup_id`<sup>Optional</sup> <a name="volume_backup_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.volumeBackupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#volume_backup_id CoreVolume#volume_backup_id}.

---

##### `vpus_per_gb`<sup>Optional</sup> <a name="vpus_per_gb" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.vpusPerGb"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#vpus_per_gb CoreVolume#vpus_per_gb}.

---

##### `xrc_kms_key_id`<sup>Optional</sup> <a name="xrc_kms_key_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.Initializer.parameter.xrcKmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#xrc_kms_key_id CoreVolume#xrc_kms_key_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.putAutotunePolicies">put_autotune_policies</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.putBlockVolumeReplicas">put_block_volume_replicas</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.putSourceDetails">put_source_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.resetAutotunePolicies">reset_autotune_policies</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.resetBackupPolicyId">reset_backup_policy_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.resetBlockVolumeReplicas">reset_block_volume_replicas</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.resetBlockVolumeReplicasDeletion">reset_block_volume_replicas_deletion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.resetClusterPlacementGroupId">reset_cluster_placement_group_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.resetIsAutoTuneEnabled">reset_is_auto_tune_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.resetSizeInGbs">reset_size_in_gbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.resetSizeInMbs">reset_size_in_mbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.resetSourceDetails">reset_source_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.resetVolumeBackupId">reset_volume_backup_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.resetVpusPerGb">reset_vpus_per_gb</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.resetXrcKmsKeyId">reset_xrc_kms_key_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_autotune_policies` <a name="put_autotune_policies" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.putAutotunePolicies"></a>

```python
def put_autotune_policies(
  value: typing.Union[IResolvable, typing.List[CoreVolumeAutotunePolicies]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.putAutotunePolicies.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePolicies">CoreVolumeAutotunePolicies</a>]]

---

##### `put_block_volume_replicas` <a name="put_block_volume_replicas" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.putBlockVolumeReplicas"></a>

```python
def put_block_volume_replicas(
  value: typing.Union[IResolvable, typing.List[CoreVolumeBlockVolumeReplicas]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.putBlockVolumeReplicas.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicas">CoreVolumeBlockVolumeReplicas</a>]]

---

##### `put_source_details` <a name="put_source_details" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.putSourceDetails"></a>

```python
def put_source_details(
  type: str,
  change_block_size_in_bytes: str = None,
  first_backup_id: str = None,
  id: str = None,
  second_backup_id: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.putSourceDetails.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#type CoreVolume#type}.

---

###### `change_block_size_in_bytes`<sup>Optional</sup> <a name="change_block_size_in_bytes" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.putSourceDetails.parameter.changeBlockSizeInBytes"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#change_block_size_in_bytes CoreVolume#change_block_size_in_bytes}.

---

###### `first_backup_id`<sup>Optional</sup> <a name="first_backup_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.putSourceDetails.parameter.firstBackupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#first_backup_id CoreVolume#first_backup_id}.

---

###### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.putSourceDetails.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#id CoreVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `second_backup_id`<sup>Optional</sup> <a name="second_backup_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.putSourceDetails.parameter.secondBackupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#second_backup_id CoreVolume#second_backup_id}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#create CoreVolume#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#delete CoreVolume#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#update CoreVolume#update}.

---

##### `reset_autotune_policies` <a name="reset_autotune_policies" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.resetAutotunePolicies"></a>

```python
def reset_autotune_policies() -> None
```

##### `reset_backup_policy_id` <a name="reset_backup_policy_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.resetBackupPolicyId"></a>

```python
def reset_backup_policy_id() -> None
```

##### `reset_block_volume_replicas` <a name="reset_block_volume_replicas" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.resetBlockVolumeReplicas"></a>

```python
def reset_block_volume_replicas() -> None
```

##### `reset_block_volume_replicas_deletion` <a name="reset_block_volume_replicas_deletion" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.resetBlockVolumeReplicasDeletion"></a>

```python
def reset_block_volume_replicas_deletion() -> None
```

##### `reset_cluster_placement_group_id` <a name="reset_cluster_placement_group_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.resetClusterPlacementGroupId"></a>

```python
def reset_cluster_placement_group_id() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_auto_tune_enabled` <a name="reset_is_auto_tune_enabled" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.resetIsAutoTuneEnabled"></a>

```python
def reset_is_auto_tune_enabled() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_size_in_gbs` <a name="reset_size_in_gbs" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.resetSizeInGbs"></a>

```python
def reset_size_in_gbs() -> None
```

##### `reset_size_in_mbs` <a name="reset_size_in_mbs" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.resetSizeInMbs"></a>

```python
def reset_size_in_mbs() -> None
```

##### `reset_source_details` <a name="reset_source_details" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.resetSourceDetails"></a>

```python
def reset_source_details() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_volume_backup_id` <a name="reset_volume_backup_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.resetVolumeBackupId"></a>

```python
def reset_volume_backup_id() -> None
```

##### `reset_vpus_per_gb` <a name="reset_vpus_per_gb" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.resetVpusPerGb"></a>

```python
def reset_vpus_per_gb() -> None
```

##### `reset_xrc_kms_key_id` <a name="reset_xrc_kms_key_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.resetXrcKmsKeyId"></a>

```python
def reset_xrc_kms_key_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CoreVolume resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume

coreVolume.CoreVolume.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume

coreVolume.CoreVolume.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume

coreVolume.CoreVolume.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume

coreVolume.CoreVolume.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CoreVolume resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CoreVolume to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CoreVolume that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CoreVolume to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.autoTunedVpusPerGb">auto_tuned_vpus_per_gb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.autotunePolicies">autotune_policies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesList">CoreVolumeAutotunePoliciesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.blockVolumeReplicas">block_volume_replicas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasList">CoreVolumeBlockVolumeReplicasList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.isHydrated">is_hydrated</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.sourceDetails">source_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference">CoreVolumeSourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference">CoreVolumeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.volumeGroupId">volume_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.autotunePoliciesInput">autotune_policies_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePolicies">CoreVolumeAutotunePolicies</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.backupPolicyIdInput">backup_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.blockVolumeReplicasDeletionInput">block_volume_replicas_deletion_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.blockVolumeReplicasInput">block_volume_replicas_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicas">CoreVolumeBlockVolumeReplicas</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.clusterPlacementGroupIdInput">cluster_placement_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.isAutoTuneEnabledInput">is_auto_tune_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.sizeInGbsInput">size_in_gbs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.sizeInMbsInput">size_in_mbs_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.sourceDetailsInput">source_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetails">CoreVolumeSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeouts">CoreVolumeTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.volumeBackupIdInput">volume_backup_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.vpusPerGbInput">vpus_per_gb_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.xrcKmsKeyIdInput">xrc_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.backupPolicyId">backup_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.blockVolumeReplicasDeletion">block_volume_replicas_deletion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.clusterPlacementGroupId">cluster_placement_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.isAutoTuneEnabled">is_auto_tune_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.sizeInGbs">size_in_gbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.sizeInMbs">size_in_mbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.volumeBackupId">volume_backup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.vpusPerGb">vpus_per_gb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.xrcKmsKeyId">xrc_kms_key_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auto_tuned_vpus_per_gb`<sup>Required</sup> <a name="auto_tuned_vpus_per_gb" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.autoTunedVpusPerGb"></a>

```python
auto_tuned_vpus_per_gb: str
```

- *Type:* str

---

##### `autotune_policies`<sup>Required</sup> <a name="autotune_policies" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.autotunePolicies"></a>

```python
autotune_policies: CoreVolumeAutotunePoliciesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesList">CoreVolumeAutotunePoliciesList</a>

---

##### `block_volume_replicas`<sup>Required</sup> <a name="block_volume_replicas" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.blockVolumeReplicas"></a>

```python
block_volume_replicas: CoreVolumeBlockVolumeReplicasList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasList">CoreVolumeBlockVolumeReplicasList</a>

---

##### `is_hydrated`<sup>Required</sup> <a name="is_hydrated" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.isHydrated"></a>

```python
is_hydrated: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `source_details`<sup>Required</sup> <a name="source_details" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.sourceDetails"></a>

```python
source_details: CoreVolumeSourceDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference">CoreVolumeSourceDetailsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.timeouts"></a>

```python
timeouts: CoreVolumeTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference">CoreVolumeTimeoutsOutputReference</a>

---

##### `volume_group_id`<sup>Required</sup> <a name="volume_group_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.volumeGroupId"></a>

```python
volume_group_id: str
```

- *Type:* str

---

##### `autotune_policies_input`<sup>Optional</sup> <a name="autotune_policies_input" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.autotunePoliciesInput"></a>

```python
autotune_policies_input: typing.Union[IResolvable, typing.List[CoreVolumeAutotunePolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePolicies">CoreVolumeAutotunePolicies</a>]]

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `backup_policy_id_input`<sup>Optional</sup> <a name="backup_policy_id_input" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.backupPolicyIdInput"></a>

```python
backup_policy_id_input: str
```

- *Type:* str

---

##### `block_volume_replicas_deletion_input`<sup>Optional</sup> <a name="block_volume_replicas_deletion_input" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.blockVolumeReplicasDeletionInput"></a>

```python
block_volume_replicas_deletion_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `block_volume_replicas_input`<sup>Optional</sup> <a name="block_volume_replicas_input" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.blockVolumeReplicasInput"></a>

```python
block_volume_replicas_input: typing.Union[IResolvable, typing.List[CoreVolumeBlockVolumeReplicas]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicas">CoreVolumeBlockVolumeReplicas</a>]]

---

##### `cluster_placement_group_id_input`<sup>Optional</sup> <a name="cluster_placement_group_id_input" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.clusterPlacementGroupIdInput"></a>

```python
cluster_placement_group_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_auto_tune_enabled_input`<sup>Optional</sup> <a name="is_auto_tune_enabled_input" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.isAutoTuneEnabledInput"></a>

```python
is_auto_tune_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `size_in_gbs_input`<sup>Optional</sup> <a name="size_in_gbs_input" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.sizeInGbsInput"></a>

```python
size_in_gbs_input: str
```

- *Type:* str

---

##### `size_in_mbs_input`<sup>Optional</sup> <a name="size_in_mbs_input" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.sizeInMbsInput"></a>

```python
size_in_mbs_input: str
```

- *Type:* str

---

##### `source_details_input`<sup>Optional</sup> <a name="source_details_input" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.sourceDetailsInput"></a>

```python
source_details_input: CoreVolumeSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetails">CoreVolumeSourceDetails</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CoreVolumeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeouts">CoreVolumeTimeouts</a>]

---

##### `volume_backup_id_input`<sup>Optional</sup> <a name="volume_backup_id_input" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.volumeBackupIdInput"></a>

```python
volume_backup_id_input: str
```

- *Type:* str

---

##### `vpus_per_gb_input`<sup>Optional</sup> <a name="vpus_per_gb_input" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.vpusPerGbInput"></a>

```python
vpus_per_gb_input: str
```

- *Type:* str

---

##### `xrc_kms_key_id_input`<sup>Optional</sup> <a name="xrc_kms_key_id_input" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.xrcKmsKeyIdInput"></a>

```python
xrc_kms_key_id_input: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `backup_policy_id`<sup>Required</sup> <a name="backup_policy_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.backupPolicyId"></a>

```python
backup_policy_id: str
```

- *Type:* str

---

##### `block_volume_replicas_deletion`<sup>Required</sup> <a name="block_volume_replicas_deletion" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.blockVolumeReplicasDeletion"></a>

```python
block_volume_replicas_deletion: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cluster_placement_group_id`<sup>Required</sup> <a name="cluster_placement_group_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.clusterPlacementGroupId"></a>

```python
cluster_placement_group_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_auto_tune_enabled`<sup>Required</sup> <a name="is_auto_tune_enabled" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.isAutoTuneEnabled"></a>

```python
is_auto_tune_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `size_in_gbs`<sup>Required</sup> <a name="size_in_gbs" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.sizeInGbs"></a>

```python
size_in_gbs: str
```

- *Type:* str

---

##### `size_in_mbs`<sup>Required</sup> <a name="size_in_mbs" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.sizeInMbs"></a>

```python
size_in_mbs: str
```

- *Type:* str

---

##### `volume_backup_id`<sup>Required</sup> <a name="volume_backup_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.volumeBackupId"></a>

```python
volume_backup_id: str
```

- *Type:* str

---

##### `vpus_per_gb`<sup>Required</sup> <a name="vpus_per_gb" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.vpusPerGb"></a>

```python
vpus_per_gb: str
```

- *Type:* str

---

##### `xrc_kms_key_id`<sup>Required</sup> <a name="xrc_kms_key_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.xrcKmsKeyId"></a>

```python
xrc_kms_key_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolume.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CoreVolumeAutotunePolicies <a name="CoreVolumeAutotunePolicies" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePolicies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePolicies.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume

coreVolume.CoreVolumeAutotunePolicies(
  autotune_type: str,
  max_vpus_per_gb: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePolicies.property.autotuneType">autotune_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#autotune_type CoreVolume#autotune_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePolicies.property.maxVpusPerGb">max_vpus_per_gb</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#max_vpus_per_gb CoreVolume#max_vpus_per_gb}. |

---

##### `autotune_type`<sup>Required</sup> <a name="autotune_type" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePolicies.property.autotuneType"></a>

```python
autotune_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#autotune_type CoreVolume#autotune_type}.

---

##### `max_vpus_per_gb`<sup>Optional</sup> <a name="max_vpus_per_gb" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePolicies.property.maxVpusPerGb"></a>

```python
max_vpus_per_gb: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#max_vpus_per_gb CoreVolume#max_vpus_per_gb}.

---

### CoreVolumeBlockVolumeReplicas <a name="CoreVolumeBlockVolumeReplicas" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicas.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume

coreVolume.CoreVolumeBlockVolumeReplicas(
  availability_domain: str,
  display_name: str = None,
  xrr_kms_key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicas.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#availability_domain CoreVolume#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicas.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#display_name CoreVolume#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicas.property.xrrKmsKeyId">xrr_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#xrr_kms_key_id CoreVolume#xrr_kms_key_id}. |

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicas.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#availability_domain CoreVolume#availability_domain}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicas.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#display_name CoreVolume#display_name}.

---

##### `xrr_kms_key_id`<sup>Optional</sup> <a name="xrr_kms_key_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicas.property.xrrKmsKeyId"></a>

```python
xrr_kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#xrr_kms_key_id CoreVolume#xrr_kms_key_id}.

---

### CoreVolumeConfig <a name="CoreVolumeConfig" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume

coreVolume.CoreVolumeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_domain: str,
  compartment_id: str,
  autotune_policies: typing.Union[IResolvable, typing.List[CoreVolumeAutotunePolicies]] = None,
  backup_policy_id: str = None,
  block_volume_replicas: typing.Union[IResolvable, typing.List[CoreVolumeBlockVolumeReplicas]] = None,
  block_volume_replicas_deletion: typing.Union[bool, IResolvable] = None,
  cluster_placement_group_id: str = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_auto_tune_enabled: typing.Union[bool, IResolvable] = None,
  kms_key_id: str = None,
  size_in_gbs: str = None,
  size_in_mbs: str = None,
  source_details: CoreVolumeSourceDetails = None,
  timeouts: CoreVolumeTimeouts = None,
  volume_backup_id: str = None,
  vpus_per_gb: str = None,
  xrc_kms_key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#availability_domain CoreVolume#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#compartment_id CoreVolume#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.autotunePolicies">autotune_policies</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePolicies">CoreVolumeAutotunePolicies</a>]]</code> | autotune_policies block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.backupPolicyId">backup_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#backup_policy_id CoreVolume#backup_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.blockVolumeReplicas">block_volume_replicas</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicas">CoreVolumeBlockVolumeReplicas</a>]]</code> | block_volume_replicas block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.blockVolumeReplicasDeletion">block_volume_replicas_deletion</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#block_volume_replicas_deletion CoreVolume#block_volume_replicas_deletion}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.clusterPlacementGroupId">cluster_placement_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#cluster_placement_group_id CoreVolume#cluster_placement_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#defined_tags CoreVolume#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#display_name CoreVolume#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#freeform_tags CoreVolume#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#id CoreVolume#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.isAutoTuneEnabled">is_auto_tune_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#is_auto_tune_enabled CoreVolume#is_auto_tune_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#kms_key_id CoreVolume#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.sizeInGbs">size_in_gbs</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#size_in_gbs CoreVolume#size_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.sizeInMbs">size_in_mbs</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#size_in_mbs CoreVolume#size_in_mbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.sourceDetails">source_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetails">CoreVolumeSourceDetails</a></code> | source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeouts">CoreVolumeTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.volumeBackupId">volume_backup_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#volume_backup_id CoreVolume#volume_backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.vpusPerGb">vpus_per_gb</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#vpus_per_gb CoreVolume#vpus_per_gb}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.xrcKmsKeyId">xrc_kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#xrc_kms_key_id CoreVolume#xrc_kms_key_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#availability_domain CoreVolume#availability_domain}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#compartment_id CoreVolume#compartment_id}.

---

##### `autotune_policies`<sup>Optional</sup> <a name="autotune_policies" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.autotunePolicies"></a>

```python
autotune_policies: typing.Union[IResolvable, typing.List[CoreVolumeAutotunePolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePolicies">CoreVolumeAutotunePolicies</a>]]

autotune_policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#autotune_policies CoreVolume#autotune_policies}

---

##### `backup_policy_id`<sup>Optional</sup> <a name="backup_policy_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.backupPolicyId"></a>

```python
backup_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#backup_policy_id CoreVolume#backup_policy_id}.

---

##### `block_volume_replicas`<sup>Optional</sup> <a name="block_volume_replicas" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.blockVolumeReplicas"></a>

```python
block_volume_replicas: typing.Union[IResolvable, typing.List[CoreVolumeBlockVolumeReplicas]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicas">CoreVolumeBlockVolumeReplicas</a>]]

block_volume_replicas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#block_volume_replicas CoreVolume#block_volume_replicas}

---

##### `block_volume_replicas_deletion`<sup>Optional</sup> <a name="block_volume_replicas_deletion" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.blockVolumeReplicasDeletion"></a>

```python
block_volume_replicas_deletion: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#block_volume_replicas_deletion CoreVolume#block_volume_replicas_deletion}.

---

##### `cluster_placement_group_id`<sup>Optional</sup> <a name="cluster_placement_group_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.clusterPlacementGroupId"></a>

```python
cluster_placement_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#cluster_placement_group_id CoreVolume#cluster_placement_group_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#defined_tags CoreVolume#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#display_name CoreVolume#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#freeform_tags CoreVolume#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#id CoreVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_auto_tune_enabled`<sup>Optional</sup> <a name="is_auto_tune_enabled" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.isAutoTuneEnabled"></a>

```python
is_auto_tune_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#is_auto_tune_enabled CoreVolume#is_auto_tune_enabled}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#kms_key_id CoreVolume#kms_key_id}.

---

##### `size_in_gbs`<sup>Optional</sup> <a name="size_in_gbs" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.sizeInGbs"></a>

```python
size_in_gbs: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#size_in_gbs CoreVolume#size_in_gbs}.

---

##### `size_in_mbs`<sup>Optional</sup> <a name="size_in_mbs" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.sizeInMbs"></a>

```python
size_in_mbs: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#size_in_mbs CoreVolume#size_in_mbs}.

---

##### `source_details`<sup>Optional</sup> <a name="source_details" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.sourceDetails"></a>

```python
source_details: CoreVolumeSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetails">CoreVolumeSourceDetails</a>

source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#source_details CoreVolume#source_details}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.timeouts"></a>

```python
timeouts: CoreVolumeTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeouts">CoreVolumeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#timeouts CoreVolume#timeouts}

---

##### `volume_backup_id`<sup>Optional</sup> <a name="volume_backup_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.volumeBackupId"></a>

```python
volume_backup_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#volume_backup_id CoreVolume#volume_backup_id}.

---

##### `vpus_per_gb`<sup>Optional</sup> <a name="vpus_per_gb" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.vpusPerGb"></a>

```python
vpus_per_gb: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#vpus_per_gb CoreVolume#vpus_per_gb}.

---

##### `xrc_kms_key_id`<sup>Optional</sup> <a name="xrc_kms_key_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeConfig.property.xrcKmsKeyId"></a>

```python
xrc_kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#xrc_kms_key_id CoreVolume#xrc_kms_key_id}.

---

### CoreVolumeSourceDetails <a name="CoreVolumeSourceDetails" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume

coreVolume.CoreVolumeSourceDetails(
  type: str,
  change_block_size_in_bytes: str = None,
  first_backup_id: str = None,
  id: str = None,
  second_backup_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetails.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#type CoreVolume#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetails.property.changeBlockSizeInBytes">change_block_size_in_bytes</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#change_block_size_in_bytes CoreVolume#change_block_size_in_bytes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetails.property.firstBackupId">first_backup_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#first_backup_id CoreVolume#first_backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetails.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#id CoreVolume#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetails.property.secondBackupId">second_backup_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#second_backup_id CoreVolume#second_backup_id}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetails.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#type CoreVolume#type}.

---

##### `change_block_size_in_bytes`<sup>Optional</sup> <a name="change_block_size_in_bytes" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetails.property.changeBlockSizeInBytes"></a>

```python
change_block_size_in_bytes: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#change_block_size_in_bytes CoreVolume#change_block_size_in_bytes}.

---

##### `first_backup_id`<sup>Optional</sup> <a name="first_backup_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetails.property.firstBackupId"></a>

```python
first_backup_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#first_backup_id CoreVolume#first_backup_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetails.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#id CoreVolume#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `second_backup_id`<sup>Optional</sup> <a name="second_backup_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetails.property.secondBackupId"></a>

```python
second_backup_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#second_backup_id CoreVolume#second_backup_id}.

---

### CoreVolumeTimeouts <a name="CoreVolumeTimeouts" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume

coreVolume.CoreVolumeTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#create CoreVolume#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#delete CoreVolume#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#update CoreVolume#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#create CoreVolume#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#delete CoreVolume#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume#update CoreVolume#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreVolumeAutotunePoliciesList <a name="CoreVolumeAutotunePoliciesList" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume

coreVolume.CoreVolumeAutotunePoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CoreVolumeAutotunePoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePolicies">CoreVolumeAutotunePolicies</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CoreVolumeAutotunePolicies]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePolicies">CoreVolumeAutotunePolicies</a>]]

---


### CoreVolumeAutotunePoliciesOutputReference <a name="CoreVolumeAutotunePoliciesOutputReference" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume

coreVolume.CoreVolumeAutotunePoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.resetMaxVpusPerGb">reset_max_vpus_per_gb</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_max_vpus_per_gb` <a name="reset_max_vpus_per_gb" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.resetMaxVpusPerGb"></a>

```python
def reset_max_vpus_per_gb() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.property.autotuneTypeInput">autotune_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.property.maxVpusPerGbInput">max_vpus_per_gb_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.property.autotuneType">autotune_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.property.maxVpusPerGb">max_vpus_per_gb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePolicies">CoreVolumeAutotunePolicies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `autotune_type_input`<sup>Optional</sup> <a name="autotune_type_input" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.property.autotuneTypeInput"></a>

```python
autotune_type_input: str
```

- *Type:* str

---

##### `max_vpus_per_gb_input`<sup>Optional</sup> <a name="max_vpus_per_gb_input" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.property.maxVpusPerGbInput"></a>

```python
max_vpus_per_gb_input: str
```

- *Type:* str

---

##### `autotune_type`<sup>Required</sup> <a name="autotune_type" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.property.autotuneType"></a>

```python
autotune_type: str
```

- *Type:* str

---

##### `max_vpus_per_gb`<sup>Required</sup> <a name="max_vpus_per_gb" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.property.maxVpusPerGb"></a>

```python
max_vpus_per_gb: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePoliciesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CoreVolumeAutotunePolicies]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeAutotunePolicies">CoreVolumeAutotunePolicies</a>]

---


### CoreVolumeBlockVolumeReplicasList <a name="CoreVolumeBlockVolumeReplicasList" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume

coreVolume.CoreVolumeBlockVolumeReplicasList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CoreVolumeBlockVolumeReplicasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicas">CoreVolumeBlockVolumeReplicas</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[CoreVolumeBlockVolumeReplicas]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicas">CoreVolumeBlockVolumeReplicas</a>]]

---


### CoreVolumeBlockVolumeReplicasOutputReference <a name="CoreVolumeBlockVolumeReplicasOutputReference" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume

coreVolume.CoreVolumeBlockVolumeReplicasOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.resetXrrKmsKeyId">reset_xrr_kms_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_xrr_kms_key_id` <a name="reset_xrr_kms_key_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.resetXrrKmsKeyId"></a>

```python
def reset_xrr_kms_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.property.blockVolumeReplicaId">block_volume_replica_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.property.xrrKmsKeyIdInput">xrr_kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.property.xrrKmsKeyId">xrr_kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicas">CoreVolumeBlockVolumeReplicas</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `block_volume_replica_id`<sup>Required</sup> <a name="block_volume_replica_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.property.blockVolumeReplicaId"></a>

```python
block_volume_replica_id: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `xrr_kms_key_id_input`<sup>Optional</sup> <a name="xrr_kms_key_id_input" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.property.xrrKmsKeyIdInput"></a>

```python
xrr_kms_key_id_input: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `xrr_kms_key_id`<sup>Required</sup> <a name="xrr_kms_key_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.property.xrrKmsKeyId"></a>

```python
xrr_kms_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicasOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CoreVolumeBlockVolumeReplicas]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeBlockVolumeReplicas">CoreVolumeBlockVolumeReplicas</a>]

---


### CoreVolumeSourceDetailsOutputReference <a name="CoreVolumeSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume

coreVolume.CoreVolumeSourceDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.resetChangeBlockSizeInBytes">reset_change_block_size_in_bytes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.resetFirstBackupId">reset_first_backup_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.resetSecondBackupId">reset_second_backup_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_change_block_size_in_bytes` <a name="reset_change_block_size_in_bytes" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.resetChangeBlockSizeInBytes"></a>

```python
def reset_change_block_size_in_bytes() -> None
```

##### `reset_first_backup_id` <a name="reset_first_backup_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.resetFirstBackupId"></a>

```python
def reset_first_backup_id() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_second_backup_id` <a name="reset_second_backup_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.resetSecondBackupId"></a>

```python
def reset_second_backup_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.property.changeBlockSizeInBytesInput">change_block_size_in_bytes_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.property.firstBackupIdInput">first_backup_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.property.secondBackupIdInput">second_backup_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.property.changeBlockSizeInBytes">change_block_size_in_bytes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.property.firstBackupId">first_backup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.property.secondBackupId">second_backup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetails">CoreVolumeSourceDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `change_block_size_in_bytes_input`<sup>Optional</sup> <a name="change_block_size_in_bytes_input" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.property.changeBlockSizeInBytesInput"></a>

```python
change_block_size_in_bytes_input: str
```

- *Type:* str

---

##### `first_backup_id_input`<sup>Optional</sup> <a name="first_backup_id_input" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.property.firstBackupIdInput"></a>

```python
first_backup_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `second_backup_id_input`<sup>Optional</sup> <a name="second_backup_id_input" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.property.secondBackupIdInput"></a>

```python
second_backup_id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `change_block_size_in_bytes`<sup>Required</sup> <a name="change_block_size_in_bytes" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.property.changeBlockSizeInBytes"></a>

```python
change_block_size_in_bytes: str
```

- *Type:* str

---

##### `first_backup_id`<sup>Required</sup> <a name="first_backup_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.property.firstBackupId"></a>

```python
first_backup_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `second_backup_id`<sup>Required</sup> <a name="second_backup_id" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.property.secondBackupId"></a>

```python
second_backup_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetailsOutputReference.property.internalValue"></a>

```python
internal_value: CoreVolumeSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeSourceDetails">CoreVolumeSourceDetails</a>

---


### CoreVolumeTimeoutsOutputReference <a name="CoreVolumeTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume

coreVolume.CoreVolumeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeouts">CoreVolumeTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CoreVolumeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVolume.CoreVolumeTimeouts">CoreVolumeTimeouts</a>]

---



