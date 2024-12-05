# `fileStorageFilesystemSnapshotPolicy` Submodule <a name="`fileStorageFilesystemSnapshotPolicy` Submodule" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FileStorageFilesystemSnapshotPolicy <a name="FileStorageFilesystemSnapshotPolicy" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy oci_file_storage_filesystem_snapshot_policy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_filesystem_snapshot_policy

fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy(
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
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_lock_override: typing.Union[bool, IResolvable] = None,
  locks: typing.Union[IResolvable, typing.List[FileStorageFilesystemSnapshotPolicyLocks]] = None,
  policy_prefix: str = None,
  schedules: typing.Union[IResolvable, typing.List[FileStorageFilesystemSnapshotPolicySchedules]] = None,
  state: str = None,
  timeouts: FileStorageFilesystemSnapshotPolicyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#availability_domain FileStorageFilesystemSnapshotPolicy#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#compartment_id FileStorageFilesystemSnapshotPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#defined_tags FileStorageFilesystemSnapshotPolicy#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#display_name FileStorageFilesystemSnapshotPolicy#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#freeform_tags FileStorageFilesystemSnapshotPolicy#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#id FileStorageFilesystemSnapshotPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.isLockOverride">is_lock_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#is_lock_override FileStorageFilesystemSnapshotPolicy#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.locks">locks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks">FileStorageFilesystemSnapshotPolicyLocks</a>]]</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.policyPrefix">policy_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#policy_prefix FileStorageFilesystemSnapshotPolicy#policy_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.schedules">schedules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules">FileStorageFilesystemSnapshotPolicySchedules</a>]]</code> | schedules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#state FileStorageFilesystemSnapshotPolicy#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts">FileStorageFilesystemSnapshotPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#availability_domain FileStorageFilesystemSnapshotPolicy#availability_domain}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#compartment_id FileStorageFilesystemSnapshotPolicy#compartment_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#defined_tags FileStorageFilesystemSnapshotPolicy#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#display_name FileStorageFilesystemSnapshotPolicy#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#freeform_tags FileStorageFilesystemSnapshotPolicy#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#id FileStorageFilesystemSnapshotPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_lock_override`<sup>Optional</sup> <a name="is_lock_override" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.isLockOverride"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#is_lock_override FileStorageFilesystemSnapshotPolicy#is_lock_override}.

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.locks"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks">FileStorageFilesystemSnapshotPolicyLocks</a>]]

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#locks FileStorageFilesystemSnapshotPolicy#locks}

---

##### `policy_prefix`<sup>Optional</sup> <a name="policy_prefix" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.policyPrefix"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#policy_prefix FileStorageFilesystemSnapshotPolicy#policy_prefix}.

---

##### `schedules`<sup>Optional</sup> <a name="schedules" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.schedules"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules">FileStorageFilesystemSnapshotPolicySchedules</a>]]

schedules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#schedules FileStorageFilesystemSnapshotPolicy#schedules}

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.Initializer.parameter.state"></a>

- *Type:* str

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
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.putLocks">put_locks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.putSchedules">put_schedules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetIsLockOverride">reset_is_lock_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetLocks">reset_locks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetPolicyPrefix">reset_policy_prefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetSchedules">reset_schedules</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_locks` <a name="put_locks" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.putLocks"></a>

```python
def put_locks(
  value: typing.Union[IResolvable, typing.List[FileStorageFilesystemSnapshotPolicyLocks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.putLocks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks">FileStorageFilesystemSnapshotPolicyLocks</a>]]

---

##### `put_schedules` <a name="put_schedules" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.putSchedules"></a>

```python
def put_schedules(
  value: typing.Union[IResolvable, typing.List[FileStorageFilesystemSnapshotPolicySchedules]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.putSchedules.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules">FileStorageFilesystemSnapshotPolicySchedules</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#create FileStorageFilesystemSnapshotPolicy#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#delete FileStorageFilesystemSnapshotPolicy#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#update FileStorageFilesystemSnapshotPolicy#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_lock_override` <a name="reset_is_lock_override" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetIsLockOverride"></a>

```python
def reset_is_lock_override() -> None
```

##### `reset_locks` <a name="reset_locks" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetLocks"></a>

```python
def reset_locks() -> None
```

##### `reset_policy_prefix` <a name="reset_policy_prefix" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetPolicyPrefix"></a>

```python
def reset_policy_prefix() -> None
```

##### `reset_schedules` <a name="reset_schedules" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetSchedules"></a>

```python
def reset_schedules() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FileStorageFilesystemSnapshotPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_filesystem_snapshot_policy

fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_filesystem_snapshot_policy

fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_filesystem_snapshot_policy

fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_filesystem_snapshot_policy

fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FileStorageFilesystemSnapshotPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FileStorageFilesystemSnapshotPolicy to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FileStorageFilesystemSnapshotPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FileStorageFilesystemSnapshotPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList">FileStorageFilesystemSnapshotPolicyLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.schedules">schedules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList">FileStorageFilesystemSnapshotPolicySchedulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference">FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.isLockOverrideInput">is_lock_override_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.locksInput">locks_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks">FileStorageFilesystemSnapshotPolicyLocks</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.policyPrefixInput">policy_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.schedulesInput">schedules_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules">FileStorageFilesystemSnapshotPolicySchedules</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts">FileStorageFilesystemSnapshotPolicyTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.isLockOverride">is_lock_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.policyPrefix">policy_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.locks"></a>

```python
locks: FileStorageFilesystemSnapshotPolicyLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList">FileStorageFilesystemSnapshotPolicyLocksList</a>

---

##### `schedules`<sup>Required</sup> <a name="schedules" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.schedules"></a>

```python
schedules: FileStorageFilesystemSnapshotPolicySchedulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList">FileStorageFilesystemSnapshotPolicySchedulesList</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.timeouts"></a>

```python
timeouts: FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference">FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference</a>

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_lock_override_input`<sup>Optional</sup> <a name="is_lock_override_input" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.isLockOverrideInput"></a>

```python
is_lock_override_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `locks_input`<sup>Optional</sup> <a name="locks_input" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.locksInput"></a>

```python
locks_input: typing.Union[IResolvable, typing.List[FileStorageFilesystemSnapshotPolicyLocks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks">FileStorageFilesystemSnapshotPolicyLocks</a>]]

---

##### `policy_prefix_input`<sup>Optional</sup> <a name="policy_prefix_input" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.policyPrefixInput"></a>

```python
policy_prefix_input: str
```

- *Type:* str

---

##### `schedules_input`<sup>Optional</sup> <a name="schedules_input" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.schedulesInput"></a>

```python
schedules_input: typing.Union[IResolvable, typing.List[FileStorageFilesystemSnapshotPolicySchedules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules">FileStorageFilesystemSnapshotPolicySchedules</a>]]

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, FileStorageFilesystemSnapshotPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts">FileStorageFilesystemSnapshotPolicyTimeouts</a>]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_lock_override`<sup>Required</sup> <a name="is_lock_override" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.isLockOverride"></a>

```python
is_lock_override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `policy_prefix`<sup>Required</sup> <a name="policy_prefix" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.policyPrefix"></a>

```python
policy_prefix: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicy.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FileStorageFilesystemSnapshotPolicyConfig <a name="FileStorageFilesystemSnapshotPolicyConfig" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_filesystem_snapshot_policy

fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_domain: str,
  compartment_id: str,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_lock_override: typing.Union[bool, IResolvable] = None,
  locks: typing.Union[IResolvable, typing.List[FileStorageFilesystemSnapshotPolicyLocks]] = None,
  policy_prefix: str = None,
  schedules: typing.Union[IResolvable, typing.List[FileStorageFilesystemSnapshotPolicySchedules]] = None,
  state: str = None,
  timeouts: FileStorageFilesystemSnapshotPolicyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#availability_domain FileStorageFilesystemSnapshotPolicy#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#compartment_id FileStorageFilesystemSnapshotPolicy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#defined_tags FileStorageFilesystemSnapshotPolicy#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#display_name FileStorageFilesystemSnapshotPolicy#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#freeform_tags FileStorageFilesystemSnapshotPolicy#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#id FileStorageFilesystemSnapshotPolicy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.isLockOverride">is_lock_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#is_lock_override FileStorageFilesystemSnapshotPolicy#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.locks">locks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks">FileStorageFilesystemSnapshotPolicyLocks</a>]]</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.policyPrefix">policy_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#policy_prefix FileStorageFilesystemSnapshotPolicy#policy_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.schedules">schedules</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules">FileStorageFilesystemSnapshotPolicySchedules</a>]]</code> | schedules block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#state FileStorageFilesystemSnapshotPolicy#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts">FileStorageFilesystemSnapshotPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#availability_domain FileStorageFilesystemSnapshotPolicy#availability_domain}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#compartment_id FileStorageFilesystemSnapshotPolicy#compartment_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#defined_tags FileStorageFilesystemSnapshotPolicy#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#display_name FileStorageFilesystemSnapshotPolicy#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#freeform_tags FileStorageFilesystemSnapshotPolicy#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#id FileStorageFilesystemSnapshotPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_lock_override`<sup>Optional</sup> <a name="is_lock_override" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.isLockOverride"></a>

```python
is_lock_override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#is_lock_override FileStorageFilesystemSnapshotPolicy#is_lock_override}.

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.locks"></a>

```python
locks: typing.Union[IResolvable, typing.List[FileStorageFilesystemSnapshotPolicyLocks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks">FileStorageFilesystemSnapshotPolicyLocks</a>]]

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#locks FileStorageFilesystemSnapshotPolicy#locks}

---

##### `policy_prefix`<sup>Optional</sup> <a name="policy_prefix" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.policyPrefix"></a>

```python
policy_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#policy_prefix FileStorageFilesystemSnapshotPolicy#policy_prefix}.

---

##### `schedules`<sup>Optional</sup> <a name="schedules" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.schedules"></a>

```python
schedules: typing.Union[IResolvable, typing.List[FileStorageFilesystemSnapshotPolicySchedules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules">FileStorageFilesystemSnapshotPolicySchedules</a>]]

schedules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#schedules FileStorageFilesystemSnapshotPolicy#schedules}

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#state FileStorageFilesystemSnapshotPolicy#state}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyConfig.property.timeouts"></a>

```python
timeouts: FileStorageFilesystemSnapshotPolicyTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts">FileStorageFilesystemSnapshotPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#timeouts FileStorageFilesystemSnapshotPolicy#timeouts}

---

### FileStorageFilesystemSnapshotPolicyLocks <a name="FileStorageFilesystemSnapshotPolicyLocks" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_filesystem_snapshot_policy

fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks(
  type: str,
  message: str = None,
  related_resource_id: str = None,
  time_created: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#type FileStorageFilesystemSnapshotPolicy#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks.property.message">message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#message FileStorageFilesystemSnapshotPolicy#message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks.property.relatedResourceId">related_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#related_resource_id FileStorageFilesystemSnapshotPolicy#related_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks.property.timeCreated">time_created</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#time_created FileStorageFilesystemSnapshotPolicy#time_created}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#type FileStorageFilesystemSnapshotPolicy#type}.

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks.property.message"></a>

```python
message: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#message FileStorageFilesystemSnapshotPolicy#message}.

---

##### `related_resource_id`<sup>Optional</sup> <a name="related_resource_id" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks.property.relatedResourceId"></a>

```python
related_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#related_resource_id FileStorageFilesystemSnapshotPolicy#related_resource_id}.

---

##### `time_created`<sup>Optional</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#time_created FileStorageFilesystemSnapshotPolicy#time_created}.

---

### FileStorageFilesystemSnapshotPolicySchedules <a name="FileStorageFilesystemSnapshotPolicySchedules" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_filesystem_snapshot_policy

fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules(
  period: str,
  time_zone: str,
  day_of_month: typing.Union[int, float] = None,
  day_of_week: str = None,
  hour_of_day: typing.Union[int, float] = None,
  month: str = None,
  retention_duration_in_seconds: str = None,
  schedule_prefix: str = None,
  time_schedule_start: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.period">period</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#period FileStorageFilesystemSnapshotPolicy#period}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#time_zone FileStorageFilesystemSnapshotPolicy#time_zone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.dayOfMonth">day_of_month</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#day_of_month FileStorageFilesystemSnapshotPolicy#day_of_month}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#day_of_week FileStorageFilesystemSnapshotPolicy#day_of_week}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.hourOfDay">hour_of_day</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#hour_of_day FileStorageFilesystemSnapshotPolicy#hour_of_day}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.month">month</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#month FileStorageFilesystemSnapshotPolicy#month}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.retentionDurationInSeconds">retention_duration_in_seconds</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#retention_duration_in_seconds FileStorageFilesystemSnapshotPolicy#retention_duration_in_seconds}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.schedulePrefix">schedule_prefix</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#schedule_prefix FileStorageFilesystemSnapshotPolicy#schedule_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.timeScheduleStart">time_schedule_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#time_schedule_start FileStorageFilesystemSnapshotPolicy#time_schedule_start}. |

---

##### `period`<sup>Required</sup> <a name="period" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.period"></a>

```python
period: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#period FileStorageFilesystemSnapshotPolicy#period}.

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#time_zone FileStorageFilesystemSnapshotPolicy#time_zone}.

---

##### `day_of_month`<sup>Optional</sup> <a name="day_of_month" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.dayOfMonth"></a>

```python
day_of_month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#day_of_month FileStorageFilesystemSnapshotPolicy#day_of_month}.

---

##### `day_of_week`<sup>Optional</sup> <a name="day_of_week" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#day_of_week FileStorageFilesystemSnapshotPolicy#day_of_week}.

---

##### `hour_of_day`<sup>Optional</sup> <a name="hour_of_day" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.hourOfDay"></a>

```python
hour_of_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#hour_of_day FileStorageFilesystemSnapshotPolicy#hour_of_day}.

---

##### `month`<sup>Optional</sup> <a name="month" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.month"></a>

```python
month: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#month FileStorageFilesystemSnapshotPolicy#month}.

---

##### `retention_duration_in_seconds`<sup>Optional</sup> <a name="retention_duration_in_seconds" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.retentionDurationInSeconds"></a>

```python
retention_duration_in_seconds: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#retention_duration_in_seconds FileStorageFilesystemSnapshotPolicy#retention_duration_in_seconds}.

---

##### `schedule_prefix`<sup>Optional</sup> <a name="schedule_prefix" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.schedulePrefix"></a>

```python
schedule_prefix: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#schedule_prefix FileStorageFilesystemSnapshotPolicy#schedule_prefix}.

---

##### `time_schedule_start`<sup>Optional</sup> <a name="time_schedule_start" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules.property.timeScheduleStart"></a>

```python
time_schedule_start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#time_schedule_start FileStorageFilesystemSnapshotPolicy#time_schedule_start}.

---

### FileStorageFilesystemSnapshotPolicyTimeouts <a name="FileStorageFilesystemSnapshotPolicyTimeouts" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_filesystem_snapshot_policy

fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#create FileStorageFilesystemSnapshotPolicy#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#delete FileStorageFilesystemSnapshotPolicy#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#update FileStorageFilesystemSnapshotPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#create FileStorageFilesystemSnapshotPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#delete FileStorageFilesystemSnapshotPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_filesystem_snapshot_policy#update FileStorageFilesystemSnapshotPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FileStorageFilesystemSnapshotPolicyLocksList <a name="FileStorageFilesystemSnapshotPolicyLocksList" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_filesystem_snapshot_policy

fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FileStorageFilesystemSnapshotPolicyLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks">FileStorageFilesystemSnapshotPolicyLocks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FileStorageFilesystemSnapshotPolicyLocks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks">FileStorageFilesystemSnapshotPolicyLocks</a>]]

---


### FileStorageFilesystemSnapshotPolicyLocksOutputReference <a name="FileStorageFilesystemSnapshotPolicyLocksOutputReference" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_filesystem_snapshot_policy

fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.resetMessage">reset_message</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.resetRelatedResourceId">reset_related_resource_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.resetTimeCreated">reset_time_created</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_message` <a name="reset_message" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.resetMessage"></a>

```python
def reset_message() -> None
```

##### `reset_related_resource_id` <a name="reset_related_resource_id" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.resetRelatedResourceId"></a>

```python
def reset_related_resource_id() -> None
```

##### `reset_time_created` <a name="reset_time_created" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.resetTimeCreated"></a>

```python
def reset_time_created() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.messageInput">message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.relatedResourceIdInput">related_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.timeCreatedInput">time_created_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.relatedResourceId">related_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks">FileStorageFilesystemSnapshotPolicyLocks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.messageInput"></a>

```python
message_input: str
```

- *Type:* str

---

##### `related_resource_id_input`<sup>Optional</sup> <a name="related_resource_id_input" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.relatedResourceIdInput"></a>

```python
related_resource_id_input: str
```

- *Type:* str

---

##### `time_created_input`<sup>Optional</sup> <a name="time_created_input" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.timeCreatedInput"></a>

```python
time_created_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `related_resource_id`<sup>Required</sup> <a name="related_resource_id" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.relatedResourceId"></a>

```python
related_resource_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FileStorageFilesystemSnapshotPolicyLocks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyLocks">FileStorageFilesystemSnapshotPolicyLocks</a>]

---


### FileStorageFilesystemSnapshotPolicySchedulesList <a name="FileStorageFilesystemSnapshotPolicySchedulesList" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_filesystem_snapshot_policy

fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FileStorageFilesystemSnapshotPolicySchedulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules">FileStorageFilesystemSnapshotPolicySchedules</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FileStorageFilesystemSnapshotPolicySchedules]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules">FileStorageFilesystemSnapshotPolicySchedules</a>]]

---


### FileStorageFilesystemSnapshotPolicySchedulesOutputReference <a name="FileStorageFilesystemSnapshotPolicySchedulesOutputReference" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_filesystem_snapshot_policy

fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetDayOfMonth">reset_day_of_month</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetDayOfWeek">reset_day_of_week</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetHourOfDay">reset_hour_of_day</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetMonth">reset_month</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetRetentionDurationInSeconds">reset_retention_duration_in_seconds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetSchedulePrefix">reset_schedule_prefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetTimeScheduleStart">reset_time_schedule_start</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_day_of_month` <a name="reset_day_of_month" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetDayOfMonth"></a>

```python
def reset_day_of_month() -> None
```

##### `reset_day_of_week` <a name="reset_day_of_week" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetDayOfWeek"></a>

```python
def reset_day_of_week() -> None
```

##### `reset_hour_of_day` <a name="reset_hour_of_day" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetHourOfDay"></a>

```python
def reset_hour_of_day() -> None
```

##### `reset_month` <a name="reset_month" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetMonth"></a>

```python
def reset_month() -> None
```

##### `reset_retention_duration_in_seconds` <a name="reset_retention_duration_in_seconds" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetRetentionDurationInSeconds"></a>

```python
def reset_retention_duration_in_seconds() -> None
```

##### `reset_schedule_prefix` <a name="reset_schedule_prefix" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetSchedulePrefix"></a>

```python
def reset_schedule_prefix() -> None
```

##### `reset_time_schedule_start` <a name="reset_time_schedule_start" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.resetTimeScheduleStart"></a>

```python
def reset_time_schedule_start() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfMonthInput">day_of_month_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfWeekInput">day_of_week_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.hourOfDayInput">hour_of_day_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.monthInput">month_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.periodInput">period_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.retentionDurationInSecondsInput">retention_duration_in_seconds_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.schedulePrefixInput">schedule_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeScheduleStartInput">time_schedule_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfMonth">day_of_month</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfWeek">day_of_week</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.hourOfDay">hour_of_day</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.month">month</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.period">period</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.retentionDurationInSeconds">retention_duration_in_seconds</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.schedulePrefix">schedule_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeScheduleStart">time_schedule_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules">FileStorageFilesystemSnapshotPolicySchedules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `day_of_month_input`<sup>Optional</sup> <a name="day_of_month_input" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfMonthInput"></a>

```python
day_of_month_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day_of_week_input`<sup>Optional</sup> <a name="day_of_week_input" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfWeekInput"></a>

```python
day_of_week_input: str
```

- *Type:* str

---

##### `hour_of_day_input`<sup>Optional</sup> <a name="hour_of_day_input" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.hourOfDayInput"></a>

```python
hour_of_day_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month_input`<sup>Optional</sup> <a name="month_input" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.monthInput"></a>

```python
month_input: str
```

- *Type:* str

---

##### `period_input`<sup>Optional</sup> <a name="period_input" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.periodInput"></a>

```python
period_input: str
```

- *Type:* str

---

##### `retention_duration_in_seconds_input`<sup>Optional</sup> <a name="retention_duration_in_seconds_input" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.retentionDurationInSecondsInput"></a>

```python
retention_duration_in_seconds_input: str
```

- *Type:* str

---

##### `schedule_prefix_input`<sup>Optional</sup> <a name="schedule_prefix_input" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.schedulePrefixInput"></a>

```python
schedule_prefix_input: str
```

- *Type:* str

---

##### `time_schedule_start_input`<sup>Optional</sup> <a name="time_schedule_start_input" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeScheduleStartInput"></a>

```python
time_schedule_start_input: str
```

- *Type:* str

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `day_of_month`<sup>Required</sup> <a name="day_of_month" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfMonth"></a>

```python
day_of_month: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `day_of_week`<sup>Required</sup> <a name="day_of_week" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.dayOfWeek"></a>

```python
day_of_week: str
```

- *Type:* str

---

##### `hour_of_day`<sup>Required</sup> <a name="hour_of_day" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.hourOfDay"></a>

```python
hour_of_day: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `month`<sup>Required</sup> <a name="month" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.month"></a>

```python
month: str
```

- *Type:* str

---

##### `period`<sup>Required</sup> <a name="period" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.period"></a>

```python
period: str
```

- *Type:* str

---

##### `retention_duration_in_seconds`<sup>Required</sup> <a name="retention_duration_in_seconds" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.retentionDurationInSeconds"></a>

```python
retention_duration_in_seconds: str
```

- *Type:* str

---

##### `schedule_prefix`<sup>Required</sup> <a name="schedule_prefix" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.schedulePrefix"></a>

```python
schedule_prefix: str
```

- *Type:* str

---

##### `time_schedule_start`<sup>Required</sup> <a name="time_schedule_start" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeScheduleStart"></a>

```python
time_schedule_start: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedulesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FileStorageFilesystemSnapshotPolicySchedules]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicySchedules">FileStorageFilesystemSnapshotPolicySchedules</a>]

---


### FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference <a name="FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_filesystem_snapshot_policy

fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts">FileStorageFilesystemSnapshotPolicyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FileStorageFilesystemSnapshotPolicyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fileStorageFilesystemSnapshotPolicy.FileStorageFilesystemSnapshotPolicyTimeouts">FileStorageFilesystemSnapshotPolicyTimeouts</a>]

---



