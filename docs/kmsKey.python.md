# `kmsKey` Submodule <a name="`kmsKey` Submodule" id="rhizo-co-terraform-provider-oci.kmsKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsKey <a name="KmsKey" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key oci_kms_key}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_key

kmsKey.KmsKey(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str,
  key_shape: KmsKeyKeyShape,
  management_endpoint: str,
  auto_key_rotation_details: KmsKeyAutoKeyRotationDetails = None,
  defined_tags: typing.Mapping[str] = None,
  desired_state: str = None,
  external_key_reference: KmsKeyExternalKeyReference = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_auto_rotation_enabled: typing.Union[bool, IResolvable] = None,
  protection_mode: str = None,
  restore_from_file: KmsKeyRestoreFromFile = None,
  restore_from_object_store: KmsKeyRestoreFromObjectStore = None,
  restore_trigger: typing.Union[bool, IResolvable] = None,
  time_of_deletion: str = None,
  timeouts: KmsKeyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#compartment_id KmsKey#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#display_name KmsKey#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.keyShape">key_shape</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShape">KmsKeyKeyShape</a></code> | key_shape block. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.managementEndpoint">management_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#management_endpoint KmsKey#management_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.autoKeyRotationDetails">auto_key_rotation_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetails">KmsKeyAutoKeyRotationDetails</a></code> | auto_key_rotation_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#defined_tags KmsKey#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.desiredState">desired_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#desired_state KmsKey#desired_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.externalKeyReference">external_key_reference</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReference">KmsKeyExternalKeyReference</a></code> | external_key_reference block. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#freeform_tags KmsKey#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#id KmsKey#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.isAutoRotationEnabled">is_auto_rotation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#is_auto_rotation_enabled KmsKey#is_auto_rotation_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.protectionMode">protection_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#protection_mode KmsKey#protection_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.restoreFromFile">restore_from_file</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFile">KmsKeyRestoreFromFile</a></code> | restore_from_file block. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.restoreFromObjectStore">restore_from_object_store</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStore">KmsKeyRestoreFromObjectStore</a></code> | restore_from_object_store block. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.restoreTrigger">restore_trigger</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#restore_trigger KmsKey#restore_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.timeOfDeletion">time_of_deletion</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#time_of_deletion KmsKey#time_of_deletion}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeouts">KmsKeyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#compartment_id KmsKey#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#display_name KmsKey#display_name}.

---

##### `key_shape`<sup>Required</sup> <a name="key_shape" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.keyShape"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShape">KmsKeyKeyShape</a>

key_shape block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#key_shape KmsKey#key_shape}

---

##### `management_endpoint`<sup>Required</sup> <a name="management_endpoint" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.managementEndpoint"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#management_endpoint KmsKey#management_endpoint}.

---

##### `auto_key_rotation_details`<sup>Optional</sup> <a name="auto_key_rotation_details" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.autoKeyRotationDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetails">KmsKeyAutoKeyRotationDetails</a>

auto_key_rotation_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#auto_key_rotation_details KmsKey#auto_key_rotation_details}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#defined_tags KmsKey#defined_tags}.

---

##### `desired_state`<sup>Optional</sup> <a name="desired_state" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.desiredState"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#desired_state KmsKey#desired_state}.

---

##### `external_key_reference`<sup>Optional</sup> <a name="external_key_reference" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.externalKeyReference"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReference">KmsKeyExternalKeyReference</a>

external_key_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#external_key_reference KmsKey#external_key_reference}

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#freeform_tags KmsKey#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#id KmsKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_auto_rotation_enabled`<sup>Optional</sup> <a name="is_auto_rotation_enabled" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.isAutoRotationEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#is_auto_rotation_enabled KmsKey#is_auto_rotation_enabled}.

---

##### `protection_mode`<sup>Optional</sup> <a name="protection_mode" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.protectionMode"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#protection_mode KmsKey#protection_mode}.

---

##### `restore_from_file`<sup>Optional</sup> <a name="restore_from_file" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.restoreFromFile"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFile">KmsKeyRestoreFromFile</a>

restore_from_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#restore_from_file KmsKey#restore_from_file}

---

##### `restore_from_object_store`<sup>Optional</sup> <a name="restore_from_object_store" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.restoreFromObjectStore"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStore">KmsKeyRestoreFromObjectStore</a>

restore_from_object_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#restore_from_object_store KmsKey#restore_from_object_store}

---

##### `restore_trigger`<sup>Optional</sup> <a name="restore_trigger" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.restoreTrigger"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#restore_trigger KmsKey#restore_trigger}.

---

##### `time_of_deletion`<sup>Optional</sup> <a name="time_of_deletion" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.timeOfDeletion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#time_of_deletion KmsKey#time_of_deletion}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeouts">KmsKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#timeouts KmsKey#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.putAutoKeyRotationDetails">put_auto_key_rotation_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.putExternalKeyReference">put_external_key_reference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.putKeyShape">put_key_shape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.putRestoreFromFile">put_restore_from_file</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.putRestoreFromObjectStore">put_restore_from_object_store</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.resetAutoKeyRotationDetails">reset_auto_key_rotation_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.resetDesiredState">reset_desired_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.resetExternalKeyReference">reset_external_key_reference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.resetIsAutoRotationEnabled">reset_is_auto_rotation_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.resetProtectionMode">reset_protection_mode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.resetRestoreFromFile">reset_restore_from_file</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.resetRestoreFromObjectStore">reset_restore_from_object_store</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.resetRestoreTrigger">reset_restore_trigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.resetTimeOfDeletion">reset_time_of_deletion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_auto_key_rotation_details` <a name="put_auto_key_rotation_details" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.putAutoKeyRotationDetails"></a>

```python
def put_auto_key_rotation_details(
  last_rotation_message: str = None,
  last_rotation_status: str = None,
  rotation_interval_in_days: typing.Union[int, float] = None,
  time_of_last_rotation: str = None,
  time_of_next_rotation: str = None,
  time_of_schedule_start: str = None
) -> None
```

###### `last_rotation_message`<sup>Optional</sup> <a name="last_rotation_message" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.putAutoKeyRotationDetails.parameter.lastRotationMessage"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#last_rotation_message KmsKey#last_rotation_message}.

---

###### `last_rotation_status`<sup>Optional</sup> <a name="last_rotation_status" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.putAutoKeyRotationDetails.parameter.lastRotationStatus"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#last_rotation_status KmsKey#last_rotation_status}.

---

###### `rotation_interval_in_days`<sup>Optional</sup> <a name="rotation_interval_in_days" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.putAutoKeyRotationDetails.parameter.rotationIntervalInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#rotation_interval_in_days KmsKey#rotation_interval_in_days}.

---

###### `time_of_last_rotation`<sup>Optional</sup> <a name="time_of_last_rotation" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.putAutoKeyRotationDetails.parameter.timeOfLastRotation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#time_of_last_rotation KmsKey#time_of_last_rotation}.

---

###### `time_of_next_rotation`<sup>Optional</sup> <a name="time_of_next_rotation" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.putAutoKeyRotationDetails.parameter.timeOfNextRotation"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#time_of_next_rotation KmsKey#time_of_next_rotation}.

---

###### `time_of_schedule_start`<sup>Optional</sup> <a name="time_of_schedule_start" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.putAutoKeyRotationDetails.parameter.timeOfScheduleStart"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#time_of_schedule_start KmsKey#time_of_schedule_start}.

---

##### `put_external_key_reference` <a name="put_external_key_reference" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.putExternalKeyReference"></a>

```python
def put_external_key_reference(
  external_key_id: str
) -> None
```

###### `external_key_id`<sup>Required</sup> <a name="external_key_id" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.putExternalKeyReference.parameter.externalKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#external_key_id KmsKey#external_key_id}.

---

##### `put_key_shape` <a name="put_key_shape" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.putKeyShape"></a>

```python
def put_key_shape(
  algorithm: str,
  length: typing.Union[int, float],
  curve_id: str = None
) -> None
```

###### `algorithm`<sup>Required</sup> <a name="algorithm" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.putKeyShape.parameter.algorithm"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#algorithm KmsKey#algorithm}.

---

###### `length`<sup>Required</sup> <a name="length" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.putKeyShape.parameter.length"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#length KmsKey#length}.

---

###### `curve_id`<sup>Optional</sup> <a name="curve_id" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.putKeyShape.parameter.curveId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#curve_id KmsKey#curve_id}.

---

##### `put_restore_from_file` <a name="put_restore_from_file" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.putRestoreFromFile"></a>

```python
def put_restore_from_file(
  content_length: str,
  restore_key_from_file_details: str,
  content_md5: str = None
) -> None
```

###### `content_length`<sup>Required</sup> <a name="content_length" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.putRestoreFromFile.parameter.contentLength"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#content_length KmsKey#content_length}.

---

###### `restore_key_from_file_details`<sup>Required</sup> <a name="restore_key_from_file_details" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.putRestoreFromFile.parameter.restoreKeyFromFileDetails"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#restore_key_from_file_details KmsKey#restore_key_from_file_details}.

---

###### `content_md5`<sup>Optional</sup> <a name="content_md5" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.putRestoreFromFile.parameter.contentMd5"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#content_md5 KmsKey#content_md5}.

---

##### `put_restore_from_object_store` <a name="put_restore_from_object_store" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.putRestoreFromObjectStore"></a>

```python
def put_restore_from_object_store(
  destination: str,
  bucket: str = None,
  namespace: str = None,
  object: str = None,
  uri: str = None
) -> None
```

###### `destination`<sup>Required</sup> <a name="destination" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.putRestoreFromObjectStore.parameter.destination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#destination KmsKey#destination}.

---

###### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.putRestoreFromObjectStore.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#bucket KmsKey#bucket}.

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.putRestoreFromObjectStore.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#namespace KmsKey#namespace}.

---

###### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.putRestoreFromObjectStore.parameter.object"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#object KmsKey#object}.

---

###### `uri`<sup>Optional</sup> <a name="uri" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.putRestoreFromObjectStore.parameter.uri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#uri KmsKey#uri}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#create KmsKey#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#delete KmsKey#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#update KmsKey#update}.

---

##### `reset_auto_key_rotation_details` <a name="reset_auto_key_rotation_details" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.resetAutoKeyRotationDetails"></a>

```python
def reset_auto_key_rotation_details() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_desired_state` <a name="reset_desired_state" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.resetDesiredState"></a>

```python
def reset_desired_state() -> None
```

##### `reset_external_key_reference` <a name="reset_external_key_reference" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.resetExternalKeyReference"></a>

```python
def reset_external_key_reference() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_auto_rotation_enabled` <a name="reset_is_auto_rotation_enabled" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.resetIsAutoRotationEnabled"></a>

```python
def reset_is_auto_rotation_enabled() -> None
```

##### `reset_protection_mode` <a name="reset_protection_mode" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.resetProtectionMode"></a>

```python
def reset_protection_mode() -> None
```

##### `reset_restore_from_file` <a name="reset_restore_from_file" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.resetRestoreFromFile"></a>

```python
def reset_restore_from_file() -> None
```

##### `reset_restore_from_object_store` <a name="reset_restore_from_object_store" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.resetRestoreFromObjectStore"></a>

```python
def reset_restore_from_object_store() -> None
```

##### `reset_restore_trigger` <a name="reset_restore_trigger" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.resetRestoreTrigger"></a>

```python
def reset_restore_trigger() -> None
```

##### `reset_time_of_deletion` <a name="reset_time_of_deletion" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.resetTimeOfDeletion"></a>

```python
def reset_time_of_deletion() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a KmsKey resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_key

kmsKey.KmsKey.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_key

kmsKey.KmsKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_key

kmsKey.KmsKey.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_key

kmsKey.KmsKey.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a KmsKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KmsKey to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KmsKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KmsKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.autoKeyRotationDetails">auto_key_rotation_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference">KmsKeyAutoKeyRotationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.currentKeyVersion">current_key_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.externalKeyReference">external_key_reference</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference">KmsKeyExternalKeyReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.externalKeyReferenceDetails">external_key_reference_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsList">KmsKeyExternalKeyReferenceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.isPrimary">is_primary</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.keyShape">key_shape</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference">KmsKeyKeyShapeOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.replicaDetails">replica_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsList">KmsKeyReplicaDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.restoredFromKeyId">restored_from_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.restoreFromFile">restore_from_file</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference">KmsKeyRestoreFromFileOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.restoreFromObjectStore">restore_from_object_store</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference">KmsKeyRestoreFromObjectStoreOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference">KmsKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.autoKeyRotationDetailsInput">auto_key_rotation_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetails">KmsKeyAutoKeyRotationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.desiredStateInput">desired_state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.externalKeyReferenceInput">external_key_reference_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReference">KmsKeyExternalKeyReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.isAutoRotationEnabledInput">is_auto_rotation_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.keyShapeInput">key_shape_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShape">KmsKeyKeyShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.managementEndpointInput">management_endpoint_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.protectionModeInput">protection_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.restoreFromFileInput">restore_from_file_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFile">KmsKeyRestoreFromFile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.restoreFromObjectStoreInput">restore_from_object_store_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStore">KmsKeyRestoreFromObjectStore</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.restoreTriggerInput">restore_trigger_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.timeOfDeletionInput">time_of_deletion_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeouts">KmsKeyTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.desiredState">desired_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.isAutoRotationEnabled">is_auto_rotation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.managementEndpoint">management_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.protectionMode">protection_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.restoreTrigger">restore_trigger</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.timeOfDeletion">time_of_deletion</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `auto_key_rotation_details`<sup>Required</sup> <a name="auto_key_rotation_details" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.autoKeyRotationDetails"></a>

```python
auto_key_rotation_details: KmsKeyAutoKeyRotationDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference">KmsKeyAutoKeyRotationDetailsOutputReference</a>

---

##### `current_key_version`<sup>Required</sup> <a name="current_key_version" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.currentKeyVersion"></a>

```python
current_key_version: str
```

- *Type:* str

---

##### `external_key_reference`<sup>Required</sup> <a name="external_key_reference" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.externalKeyReference"></a>

```python
external_key_reference: KmsKeyExternalKeyReferenceOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference">KmsKeyExternalKeyReferenceOutputReference</a>

---

##### `external_key_reference_details`<sup>Required</sup> <a name="external_key_reference_details" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.externalKeyReferenceDetails"></a>

```python
external_key_reference_details: KmsKeyExternalKeyReferenceDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsList">KmsKeyExternalKeyReferenceDetailsList</a>

---

##### `is_primary`<sup>Required</sup> <a name="is_primary" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.isPrimary"></a>

```python
is_primary: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `key_shape`<sup>Required</sup> <a name="key_shape" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.keyShape"></a>

```python
key_shape: KmsKeyKeyShapeOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference">KmsKeyKeyShapeOutputReference</a>

---

##### `replica_details`<sup>Required</sup> <a name="replica_details" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.replicaDetails"></a>

```python
replica_details: KmsKeyReplicaDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsList">KmsKeyReplicaDetailsList</a>

---

##### `restored_from_key_id`<sup>Required</sup> <a name="restored_from_key_id" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.restoredFromKeyId"></a>

```python
restored_from_key_id: str
```

- *Type:* str

---

##### `restore_from_file`<sup>Required</sup> <a name="restore_from_file" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.restoreFromFile"></a>

```python
restore_from_file: KmsKeyRestoreFromFileOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference">KmsKeyRestoreFromFileOutputReference</a>

---

##### `restore_from_object_store`<sup>Required</sup> <a name="restore_from_object_store" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.restoreFromObjectStore"></a>

```python
restore_from_object_store: KmsKeyRestoreFromObjectStoreOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference">KmsKeyRestoreFromObjectStoreOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.timeouts"></a>

```python
timeouts: KmsKeyTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference">KmsKeyTimeoutsOutputReference</a>

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

##### `auto_key_rotation_details_input`<sup>Optional</sup> <a name="auto_key_rotation_details_input" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.autoKeyRotationDetailsInput"></a>

```python
auto_key_rotation_details_input: KmsKeyAutoKeyRotationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetails">KmsKeyAutoKeyRotationDetails</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `desired_state_input`<sup>Optional</sup> <a name="desired_state_input" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.desiredStateInput"></a>

```python
desired_state_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `external_key_reference_input`<sup>Optional</sup> <a name="external_key_reference_input" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.externalKeyReferenceInput"></a>

```python
external_key_reference_input: KmsKeyExternalKeyReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReference">KmsKeyExternalKeyReference</a>

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_auto_rotation_enabled_input`<sup>Optional</sup> <a name="is_auto_rotation_enabled_input" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.isAutoRotationEnabledInput"></a>

```python
is_auto_rotation_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_shape_input`<sup>Optional</sup> <a name="key_shape_input" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.keyShapeInput"></a>

```python
key_shape_input: KmsKeyKeyShape
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShape">KmsKeyKeyShape</a>

---

##### `management_endpoint_input`<sup>Optional</sup> <a name="management_endpoint_input" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.managementEndpointInput"></a>

```python
management_endpoint_input: str
```

- *Type:* str

---

##### `protection_mode_input`<sup>Optional</sup> <a name="protection_mode_input" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.protectionModeInput"></a>

```python
protection_mode_input: str
```

- *Type:* str

---

##### `restore_from_file_input`<sup>Optional</sup> <a name="restore_from_file_input" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.restoreFromFileInput"></a>

```python
restore_from_file_input: KmsKeyRestoreFromFile
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFile">KmsKeyRestoreFromFile</a>

---

##### `restore_from_object_store_input`<sup>Optional</sup> <a name="restore_from_object_store_input" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.restoreFromObjectStoreInput"></a>

```python
restore_from_object_store_input: KmsKeyRestoreFromObjectStore
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStore">KmsKeyRestoreFromObjectStore</a>

---

##### `restore_trigger_input`<sup>Optional</sup> <a name="restore_trigger_input" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.restoreTriggerInput"></a>

```python
restore_trigger_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `time_of_deletion_input`<sup>Optional</sup> <a name="time_of_deletion_input" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.timeOfDeletionInput"></a>

```python
time_of_deletion_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, KmsKeyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeouts">KmsKeyTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `desired_state`<sup>Required</sup> <a name="desired_state" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.desiredState"></a>

```python
desired_state: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_auto_rotation_enabled`<sup>Required</sup> <a name="is_auto_rotation_enabled" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.isAutoRotationEnabled"></a>

```python
is_auto_rotation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `management_endpoint`<sup>Required</sup> <a name="management_endpoint" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.managementEndpoint"></a>

```python
management_endpoint: str
```

- *Type:* str

---

##### `protection_mode`<sup>Required</sup> <a name="protection_mode" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.protectionMode"></a>

```python
protection_mode: str
```

- *Type:* str

---

##### `restore_trigger`<sup>Required</sup> <a name="restore_trigger" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.restoreTrigger"></a>

```python
restore_trigger: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `time_of_deletion`<sup>Required</sup> <a name="time_of_deletion" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.timeOfDeletion"></a>

```python
time_of_deletion: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KmsKeyAutoKeyRotationDetails <a name="KmsKeyAutoKeyRotationDetails" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_key

kmsKey.KmsKeyAutoKeyRotationDetails(
  last_rotation_message: str = None,
  last_rotation_status: str = None,
  rotation_interval_in_days: typing.Union[int, float] = None,
  time_of_last_rotation: str = None,
  time_of_next_rotation: str = None,
  time_of_schedule_start: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetails.property.lastRotationMessage">last_rotation_message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#last_rotation_message KmsKey#last_rotation_message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetails.property.lastRotationStatus">last_rotation_status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#last_rotation_status KmsKey#last_rotation_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetails.property.rotationIntervalInDays">rotation_interval_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#rotation_interval_in_days KmsKey#rotation_interval_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetails.property.timeOfLastRotation">time_of_last_rotation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#time_of_last_rotation KmsKey#time_of_last_rotation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetails.property.timeOfNextRotation">time_of_next_rotation</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#time_of_next_rotation KmsKey#time_of_next_rotation}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetails.property.timeOfScheduleStart">time_of_schedule_start</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#time_of_schedule_start KmsKey#time_of_schedule_start}. |

---

##### `last_rotation_message`<sup>Optional</sup> <a name="last_rotation_message" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetails.property.lastRotationMessage"></a>

```python
last_rotation_message: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#last_rotation_message KmsKey#last_rotation_message}.

---

##### `last_rotation_status`<sup>Optional</sup> <a name="last_rotation_status" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetails.property.lastRotationStatus"></a>

```python
last_rotation_status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#last_rotation_status KmsKey#last_rotation_status}.

---

##### `rotation_interval_in_days`<sup>Optional</sup> <a name="rotation_interval_in_days" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetails.property.rotationIntervalInDays"></a>

```python
rotation_interval_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#rotation_interval_in_days KmsKey#rotation_interval_in_days}.

---

##### `time_of_last_rotation`<sup>Optional</sup> <a name="time_of_last_rotation" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetails.property.timeOfLastRotation"></a>

```python
time_of_last_rotation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#time_of_last_rotation KmsKey#time_of_last_rotation}.

---

##### `time_of_next_rotation`<sup>Optional</sup> <a name="time_of_next_rotation" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetails.property.timeOfNextRotation"></a>

```python
time_of_next_rotation: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#time_of_next_rotation KmsKey#time_of_next_rotation}.

---

##### `time_of_schedule_start`<sup>Optional</sup> <a name="time_of_schedule_start" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetails.property.timeOfScheduleStart"></a>

```python
time_of_schedule_start: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#time_of_schedule_start KmsKey#time_of_schedule_start}.

---

### KmsKeyConfig <a name="KmsKeyConfig" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_key

kmsKey.KmsKeyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str,
  key_shape: KmsKeyKeyShape,
  management_endpoint: str,
  auto_key_rotation_details: KmsKeyAutoKeyRotationDetails = None,
  defined_tags: typing.Mapping[str] = None,
  desired_state: str = None,
  external_key_reference: KmsKeyExternalKeyReference = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_auto_rotation_enabled: typing.Union[bool, IResolvable] = None,
  protection_mode: str = None,
  restore_from_file: KmsKeyRestoreFromFile = None,
  restore_from_object_store: KmsKeyRestoreFromObjectStore = None,
  restore_trigger: typing.Union[bool, IResolvable] = None,
  time_of_deletion: str = None,
  timeouts: KmsKeyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#compartment_id KmsKey#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#display_name KmsKey#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.keyShape">key_shape</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShape">KmsKeyKeyShape</a></code> | key_shape block. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.managementEndpoint">management_endpoint</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#management_endpoint KmsKey#management_endpoint}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.autoKeyRotationDetails">auto_key_rotation_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetails">KmsKeyAutoKeyRotationDetails</a></code> | auto_key_rotation_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#defined_tags KmsKey#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.desiredState">desired_state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#desired_state KmsKey#desired_state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.externalKeyReference">external_key_reference</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReference">KmsKeyExternalKeyReference</a></code> | external_key_reference block. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#freeform_tags KmsKey#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#id KmsKey#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.isAutoRotationEnabled">is_auto_rotation_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#is_auto_rotation_enabled KmsKey#is_auto_rotation_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.protectionMode">protection_mode</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#protection_mode KmsKey#protection_mode}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.restoreFromFile">restore_from_file</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFile">KmsKeyRestoreFromFile</a></code> | restore_from_file block. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.restoreFromObjectStore">restore_from_object_store</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStore">KmsKeyRestoreFromObjectStore</a></code> | restore_from_object_store block. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.restoreTrigger">restore_trigger</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#restore_trigger KmsKey#restore_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.timeOfDeletion">time_of_deletion</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#time_of_deletion KmsKey#time_of_deletion}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeouts">KmsKeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#compartment_id KmsKey#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#display_name KmsKey#display_name}.

---

##### `key_shape`<sup>Required</sup> <a name="key_shape" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.keyShape"></a>

```python
key_shape: KmsKeyKeyShape
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShape">KmsKeyKeyShape</a>

key_shape block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#key_shape KmsKey#key_shape}

---

##### `management_endpoint`<sup>Required</sup> <a name="management_endpoint" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.managementEndpoint"></a>

```python
management_endpoint: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#management_endpoint KmsKey#management_endpoint}.

---

##### `auto_key_rotation_details`<sup>Optional</sup> <a name="auto_key_rotation_details" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.autoKeyRotationDetails"></a>

```python
auto_key_rotation_details: KmsKeyAutoKeyRotationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetails">KmsKeyAutoKeyRotationDetails</a>

auto_key_rotation_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#auto_key_rotation_details KmsKey#auto_key_rotation_details}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#defined_tags KmsKey#defined_tags}.

---

##### `desired_state`<sup>Optional</sup> <a name="desired_state" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.desiredState"></a>

```python
desired_state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#desired_state KmsKey#desired_state}.

---

##### `external_key_reference`<sup>Optional</sup> <a name="external_key_reference" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.externalKeyReference"></a>

```python
external_key_reference: KmsKeyExternalKeyReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReference">KmsKeyExternalKeyReference</a>

external_key_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#external_key_reference KmsKey#external_key_reference}

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#freeform_tags KmsKey#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#id KmsKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_auto_rotation_enabled`<sup>Optional</sup> <a name="is_auto_rotation_enabled" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.isAutoRotationEnabled"></a>

```python
is_auto_rotation_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#is_auto_rotation_enabled KmsKey#is_auto_rotation_enabled}.

---

##### `protection_mode`<sup>Optional</sup> <a name="protection_mode" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.protectionMode"></a>

```python
protection_mode: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#protection_mode KmsKey#protection_mode}.

---

##### `restore_from_file`<sup>Optional</sup> <a name="restore_from_file" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.restoreFromFile"></a>

```python
restore_from_file: KmsKeyRestoreFromFile
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFile">KmsKeyRestoreFromFile</a>

restore_from_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#restore_from_file KmsKey#restore_from_file}

---

##### `restore_from_object_store`<sup>Optional</sup> <a name="restore_from_object_store" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.restoreFromObjectStore"></a>

```python
restore_from_object_store: KmsKeyRestoreFromObjectStore
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStore">KmsKeyRestoreFromObjectStore</a>

restore_from_object_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#restore_from_object_store KmsKey#restore_from_object_store}

---

##### `restore_trigger`<sup>Optional</sup> <a name="restore_trigger" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.restoreTrigger"></a>

```python
restore_trigger: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#restore_trigger KmsKey#restore_trigger}.

---

##### `time_of_deletion`<sup>Optional</sup> <a name="time_of_deletion" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.timeOfDeletion"></a>

```python
time_of_deletion: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#time_of_deletion KmsKey#time_of_deletion}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyConfig.property.timeouts"></a>

```python
timeouts: KmsKeyTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeouts">KmsKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#timeouts KmsKey#timeouts}

---

### KmsKeyExternalKeyReference <a name="KmsKeyExternalKeyReference" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReference"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_key

kmsKey.KmsKeyExternalKeyReference(
  external_key_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReference.property.externalKeyId">external_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#external_key_id KmsKey#external_key_id}. |

---

##### `external_key_id`<sup>Required</sup> <a name="external_key_id" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReference.property.externalKeyId"></a>

```python
external_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#external_key_id KmsKey#external_key_id}.

---

### KmsKeyExternalKeyReferenceDetails <a name="KmsKeyExternalKeyReferenceDetails" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_key

kmsKey.KmsKeyExternalKeyReferenceDetails()
```


### KmsKeyKeyShape <a name="KmsKeyKeyShape" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShape"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShape.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_key

kmsKey.KmsKeyKeyShape(
  algorithm: str,
  length: typing.Union[int, float],
  curve_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShape.property.algorithm">algorithm</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#algorithm KmsKey#algorithm}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShape.property.length">length</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#length KmsKey#length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShape.property.curveId">curve_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#curve_id KmsKey#curve_id}. |

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShape.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#algorithm KmsKey#algorithm}.

---

##### `length`<sup>Required</sup> <a name="length" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShape.property.length"></a>

```python
length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#length KmsKey#length}.

---

##### `curve_id`<sup>Optional</sup> <a name="curve_id" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShape.property.curveId"></a>

```python
curve_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#curve_id KmsKey#curve_id}.

---

### KmsKeyReplicaDetails <a name="KmsKeyReplicaDetails" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_key

kmsKey.KmsKeyReplicaDetails()
```


### KmsKeyRestoreFromFile <a name="KmsKeyRestoreFromFile" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFile"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFile.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_key

kmsKey.KmsKeyRestoreFromFile(
  content_length: str,
  restore_key_from_file_details: str,
  content_md5: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFile.property.contentLength">content_length</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#content_length KmsKey#content_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFile.property.restoreKeyFromFileDetails">restore_key_from_file_details</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#restore_key_from_file_details KmsKey#restore_key_from_file_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFile.property.contentMd5">content_md5</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#content_md5 KmsKey#content_md5}. |

---

##### `content_length`<sup>Required</sup> <a name="content_length" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFile.property.contentLength"></a>

```python
content_length: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#content_length KmsKey#content_length}.

---

##### `restore_key_from_file_details`<sup>Required</sup> <a name="restore_key_from_file_details" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFile.property.restoreKeyFromFileDetails"></a>

```python
restore_key_from_file_details: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#restore_key_from_file_details KmsKey#restore_key_from_file_details}.

---

##### `content_md5`<sup>Optional</sup> <a name="content_md5" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFile.property.contentMd5"></a>

```python
content_md5: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#content_md5 KmsKey#content_md5}.

---

### KmsKeyRestoreFromObjectStore <a name="KmsKeyRestoreFromObjectStore" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStore"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStore.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_key

kmsKey.KmsKeyRestoreFromObjectStore(
  destination: str,
  bucket: str = None,
  namespace: str = None,
  object: str = None,
  uri: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStore.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#destination KmsKey#destination}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStore.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#bucket KmsKey#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStore.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#namespace KmsKey#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStore.property.object">object</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#object KmsKey#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStore.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#uri KmsKey#uri}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStore.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#destination KmsKey#destination}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStore.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#bucket KmsKey#bucket}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStore.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#namespace KmsKey#namespace}.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStore.property.object"></a>

```python
object: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#object KmsKey#object}.

---

##### `uri`<sup>Optional</sup> <a name="uri" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStore.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#uri KmsKey#uri}.

---

### KmsKeyTimeouts <a name="KmsKeyTimeouts" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_key

kmsKey.KmsKeyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#create KmsKey#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#delete KmsKey#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#update KmsKey#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#create KmsKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#delete KmsKey#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_key#update KmsKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KmsKeyAutoKeyRotationDetailsOutputReference <a name="KmsKeyAutoKeyRotationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_key

kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.resetLastRotationMessage">reset_last_rotation_message</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.resetLastRotationStatus">reset_last_rotation_status</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.resetRotationIntervalInDays">reset_rotation_interval_in_days</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.resetTimeOfLastRotation">reset_time_of_last_rotation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.resetTimeOfNextRotation">reset_time_of_next_rotation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.resetTimeOfScheduleStart">reset_time_of_schedule_start</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_last_rotation_message` <a name="reset_last_rotation_message" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.resetLastRotationMessage"></a>

```python
def reset_last_rotation_message() -> None
```

##### `reset_last_rotation_status` <a name="reset_last_rotation_status" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.resetLastRotationStatus"></a>

```python
def reset_last_rotation_status() -> None
```

##### `reset_rotation_interval_in_days` <a name="reset_rotation_interval_in_days" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.resetRotationIntervalInDays"></a>

```python
def reset_rotation_interval_in_days() -> None
```

##### `reset_time_of_last_rotation` <a name="reset_time_of_last_rotation" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.resetTimeOfLastRotation"></a>

```python
def reset_time_of_last_rotation() -> None
```

##### `reset_time_of_next_rotation` <a name="reset_time_of_next_rotation" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.resetTimeOfNextRotation"></a>

```python
def reset_time_of_next_rotation() -> None
```

##### `reset_time_of_schedule_start` <a name="reset_time_of_schedule_start" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.resetTimeOfScheduleStart"></a>

```python
def reset_time_of_schedule_start() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.property.lastRotationMessageInput">last_rotation_message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.property.lastRotationStatusInput">last_rotation_status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.property.rotationIntervalInDaysInput">rotation_interval_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.property.timeOfLastRotationInput">time_of_last_rotation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.property.timeOfNextRotationInput">time_of_next_rotation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.property.timeOfScheduleStartInput">time_of_schedule_start_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.property.lastRotationMessage">last_rotation_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.property.lastRotationStatus">last_rotation_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.property.rotationIntervalInDays">rotation_interval_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.property.timeOfLastRotation">time_of_last_rotation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.property.timeOfNextRotation">time_of_next_rotation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.property.timeOfScheduleStart">time_of_schedule_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetails">KmsKeyAutoKeyRotationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `last_rotation_message_input`<sup>Optional</sup> <a name="last_rotation_message_input" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.property.lastRotationMessageInput"></a>

```python
last_rotation_message_input: str
```

- *Type:* str

---

##### `last_rotation_status_input`<sup>Optional</sup> <a name="last_rotation_status_input" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.property.lastRotationStatusInput"></a>

```python
last_rotation_status_input: str
```

- *Type:* str

---

##### `rotation_interval_in_days_input`<sup>Optional</sup> <a name="rotation_interval_in_days_input" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.property.rotationIntervalInDaysInput"></a>

```python
rotation_interval_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_of_last_rotation_input`<sup>Optional</sup> <a name="time_of_last_rotation_input" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.property.timeOfLastRotationInput"></a>

```python
time_of_last_rotation_input: str
```

- *Type:* str

---

##### `time_of_next_rotation_input`<sup>Optional</sup> <a name="time_of_next_rotation_input" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.property.timeOfNextRotationInput"></a>

```python
time_of_next_rotation_input: str
```

- *Type:* str

---

##### `time_of_schedule_start_input`<sup>Optional</sup> <a name="time_of_schedule_start_input" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.property.timeOfScheduleStartInput"></a>

```python
time_of_schedule_start_input: str
```

- *Type:* str

---

##### `last_rotation_message`<sup>Required</sup> <a name="last_rotation_message" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.property.lastRotationMessage"></a>

```python
last_rotation_message: str
```

- *Type:* str

---

##### `last_rotation_status`<sup>Required</sup> <a name="last_rotation_status" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.property.lastRotationStatus"></a>

```python
last_rotation_status: str
```

- *Type:* str

---

##### `rotation_interval_in_days`<sup>Required</sup> <a name="rotation_interval_in_days" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.property.rotationIntervalInDays"></a>

```python
rotation_interval_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_of_last_rotation`<sup>Required</sup> <a name="time_of_last_rotation" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.property.timeOfLastRotation"></a>

```python
time_of_last_rotation: str
```

- *Type:* str

---

##### `time_of_next_rotation`<sup>Required</sup> <a name="time_of_next_rotation" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.property.timeOfNextRotation"></a>

```python
time_of_next_rotation: str
```

- *Type:* str

---

##### `time_of_schedule_start`<sup>Required</sup> <a name="time_of_schedule_start" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.property.timeOfScheduleStart"></a>

```python
time_of_schedule_start: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: KmsKeyAutoKeyRotationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyAutoKeyRotationDetails">KmsKeyAutoKeyRotationDetails</a>

---


### KmsKeyExternalKeyReferenceDetailsList <a name="KmsKeyExternalKeyReferenceDetailsList" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_key

kmsKey.KmsKeyExternalKeyReferenceDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KmsKeyExternalKeyReferenceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### KmsKeyExternalKeyReferenceDetailsOutputReference <a name="KmsKeyExternalKeyReferenceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_key

kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.property.externalKeyId">external_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.property.externalKeyVersionId">external_key_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetails">KmsKeyExternalKeyReferenceDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `external_key_id`<sup>Required</sup> <a name="external_key_id" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.property.externalKeyId"></a>

```python
external_key_id: str
```

- *Type:* str

---

##### `external_key_version_id`<sup>Required</sup> <a name="external_key_version_id" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.property.externalKeyVersionId"></a>

```python
external_key_version_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetailsOutputReference.property.internalValue"></a>

```python
internal_value: KmsKeyExternalKeyReferenceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceDetails">KmsKeyExternalKeyReferenceDetails</a>

---


### KmsKeyExternalKeyReferenceOutputReference <a name="KmsKeyExternalKeyReferenceOutputReference" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_key

kmsKey.KmsKeyExternalKeyReferenceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.property.externalKeyIdInput">external_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.property.externalKeyId">external_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReference">KmsKeyExternalKeyReference</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `external_key_id_input`<sup>Optional</sup> <a name="external_key_id_input" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.property.externalKeyIdInput"></a>

```python
external_key_id_input: str
```

- *Type:* str

---

##### `external_key_id`<sup>Required</sup> <a name="external_key_id" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.property.externalKeyId"></a>

```python
external_key_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReferenceOutputReference.property.internalValue"></a>

```python
internal_value: KmsKeyExternalKeyReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyExternalKeyReference">KmsKeyExternalKeyReference</a>

---


### KmsKeyKeyShapeOutputReference <a name="KmsKeyKeyShapeOutputReference" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_key

kmsKey.KmsKeyKeyShapeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.resetCurveId">reset_curve_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_curve_id` <a name="reset_curve_id" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.resetCurveId"></a>

```python
def reset_curve_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.property.algorithmInput">algorithm_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.property.curveIdInput">curve_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.property.lengthInput">length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.property.algorithm">algorithm</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.property.curveId">curve_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.property.length">length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShape">KmsKeyKeyShape</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `algorithm_input`<sup>Optional</sup> <a name="algorithm_input" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.property.algorithmInput"></a>

```python
algorithm_input: str
```

- *Type:* str

---

##### `curve_id_input`<sup>Optional</sup> <a name="curve_id_input" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.property.curveIdInput"></a>

```python
curve_id_input: str
```

- *Type:* str

---

##### `length_input`<sup>Optional</sup> <a name="length_input" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.property.lengthInput"></a>

```python
length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.property.algorithm"></a>

```python
algorithm: str
```

- *Type:* str

---

##### `curve_id`<sup>Required</sup> <a name="curve_id" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.property.curveId"></a>

```python
curve_id: str
```

- *Type:* str

---

##### `length`<sup>Required</sup> <a name="length" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.property.length"></a>

```python
length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShapeOutputReference.property.internalValue"></a>

```python
internal_value: KmsKeyKeyShape
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyKeyShape">KmsKeyKeyShape</a>

---


### KmsKeyReplicaDetailsList <a name="KmsKeyReplicaDetailsList" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_key

kmsKey.KmsKeyReplicaDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KmsKeyReplicaDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### KmsKeyReplicaDetailsOutputReference <a name="KmsKeyReplicaDetailsOutputReference" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_key

kmsKey.KmsKeyReplicaDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.property.replicationId">replication_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetails">KmsKeyReplicaDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `replication_id`<sup>Required</sup> <a name="replication_id" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.property.replicationId"></a>

```python
replication_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetailsOutputReference.property.internalValue"></a>

```python
internal_value: KmsKeyReplicaDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyReplicaDetails">KmsKeyReplicaDetails</a>

---


### KmsKeyRestoreFromFileOutputReference <a name="KmsKeyRestoreFromFileOutputReference" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_key

kmsKey.KmsKeyRestoreFromFileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.resetContentMd5">reset_content_md5</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content_md5` <a name="reset_content_md5" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.resetContentMd5"></a>

```python
def reset_content_md5() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.property.contentLengthInput">content_length_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.property.contentMd5Input">content_md5_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.property.restoreKeyFromFileDetailsInput">restore_key_from_file_details_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.property.contentLength">content_length</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.property.contentMd5">content_md5</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.property.restoreKeyFromFileDetails">restore_key_from_file_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFile">KmsKeyRestoreFromFile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_length_input`<sup>Optional</sup> <a name="content_length_input" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.property.contentLengthInput"></a>

```python
content_length_input: str
```

- *Type:* str

---

##### `content_md5_input`<sup>Optional</sup> <a name="content_md5_input" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.property.contentMd5Input"></a>

```python
content_md5_input: str
```

- *Type:* str

---

##### `restore_key_from_file_details_input`<sup>Optional</sup> <a name="restore_key_from_file_details_input" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.property.restoreKeyFromFileDetailsInput"></a>

```python
restore_key_from_file_details_input: str
```

- *Type:* str

---

##### `content_length`<sup>Required</sup> <a name="content_length" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.property.contentLength"></a>

```python
content_length: str
```

- *Type:* str

---

##### `content_md5`<sup>Required</sup> <a name="content_md5" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.property.contentMd5"></a>

```python
content_md5: str
```

- *Type:* str

---

##### `restore_key_from_file_details`<sup>Required</sup> <a name="restore_key_from_file_details" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.property.restoreKeyFromFileDetails"></a>

```python
restore_key_from_file_details: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFileOutputReference.property.internalValue"></a>

```python
internal_value: KmsKeyRestoreFromFile
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromFile">KmsKeyRestoreFromFile</a>

---


### KmsKeyRestoreFromObjectStoreOutputReference <a name="KmsKeyRestoreFromObjectStoreOutputReference" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_key

kmsKey.KmsKeyRestoreFromObjectStoreOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.resetObject">reset_object</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.resetUri">reset_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_object` <a name="reset_object" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.resetObject"></a>

```python
def reset_object() -> None
```

##### `reset_uri` <a name="reset_uri" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.resetUri"></a>

```python
def reset_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.property.objectInput">object_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStore">KmsKeyRestoreFromObjectStore</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.property.objectInput"></a>

```python
object_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStoreOutputReference.property.internalValue"></a>

```python
internal_value: KmsKeyRestoreFromObjectStore
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyRestoreFromObjectStore">KmsKeyRestoreFromObjectStore</a>

---


### KmsKeyTimeoutsOutputReference <a name="KmsKeyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_key

kmsKey.KmsKeyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeouts">KmsKeyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, KmsKeyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.kmsKey.KmsKeyTimeouts">KmsKeyTimeouts</a>]

---



