# `kmsVault` Submodule <a name="`kmsVault` Submodule" id="rhizo-co-terraform-provider-oci.kmsVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsVault <a name="KmsVault" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault oci_kms_vault}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_vault

kmsVault.KmsVault(
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
  vault_type: str,
  defined_tags: typing.Mapping[str] = None,
  external_key_manager_metadata: KmsVaultExternalKeyManagerMetadata = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  restore_from_file: KmsVaultRestoreFromFile = None,
  restore_from_object_store: KmsVaultRestoreFromObjectStore = None,
  restore_trigger: typing.Union[bool, IResolvable] = None,
  time_of_deletion: str = None,
  timeouts: KmsVaultTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#compartment_id KmsVault#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#display_name KmsVault#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.vaultType">vault_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#vault_type KmsVault#vault_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#defined_tags KmsVault#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.externalKeyManagerMetadata">external_key_manager_metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata">KmsVaultExternalKeyManagerMetadata</a></code> | external_key_manager_metadata block. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#freeform_tags KmsVault#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#id KmsVault#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.restoreFromFile">restore_from_file</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile">KmsVaultRestoreFromFile</a></code> | restore_from_file block. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.restoreFromObjectStore">restore_from_object_store</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore">KmsVaultRestoreFromObjectStore</a></code> | restore_from_object_store block. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.restoreTrigger">restore_trigger</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#restore_trigger KmsVault#restore_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.timeOfDeletion">time_of_deletion</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#time_of_deletion KmsVault#time_of_deletion}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts">KmsVaultTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#compartment_id KmsVault#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#display_name KmsVault#display_name}.

---

##### `vault_type`<sup>Required</sup> <a name="vault_type" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.vaultType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#vault_type KmsVault#vault_type}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#defined_tags KmsVault#defined_tags}.

---

##### `external_key_manager_metadata`<sup>Optional</sup> <a name="external_key_manager_metadata" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.externalKeyManagerMetadata"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata">KmsVaultExternalKeyManagerMetadata</a>

external_key_manager_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#external_key_manager_metadata KmsVault#external_key_manager_metadata}

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#freeform_tags KmsVault#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#id KmsVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `restore_from_file`<sup>Optional</sup> <a name="restore_from_file" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.restoreFromFile"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile">KmsVaultRestoreFromFile</a>

restore_from_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#restore_from_file KmsVault#restore_from_file}

---

##### `restore_from_object_store`<sup>Optional</sup> <a name="restore_from_object_store" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.restoreFromObjectStore"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore">KmsVaultRestoreFromObjectStore</a>

restore_from_object_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#restore_from_object_store KmsVault#restore_from_object_store}

---

##### `restore_trigger`<sup>Optional</sup> <a name="restore_trigger" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.restoreTrigger"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#restore_trigger KmsVault#restore_trigger}.

---

##### `time_of_deletion`<sup>Optional</sup> <a name="time_of_deletion" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.timeOfDeletion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#time_of_deletion KmsVault#time_of_deletion}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts">KmsVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#timeouts KmsVault#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putExternalKeyManagerMetadata">put_external_key_manager_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putRestoreFromFile">put_restore_from_file</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putRestoreFromObjectStore">put_restore_from_object_store</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetExternalKeyManagerMetadata">reset_external_key_manager_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetRestoreFromFile">reset_restore_from_file</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetRestoreFromObjectStore">reset_restore_from_object_store</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetRestoreTrigger">reset_restore_trigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetTimeOfDeletion">reset_time_of_deletion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_external_key_manager_metadata` <a name="put_external_key_manager_metadata" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putExternalKeyManagerMetadata"></a>

```python
def put_external_key_manager_metadata(
  external_vault_endpoint_url: str,
  oauth_metadata: KmsVaultExternalKeyManagerMetadataOauthMetadata,
  private_endpoint_id: str
) -> None
```

###### `external_vault_endpoint_url`<sup>Required</sup> <a name="external_vault_endpoint_url" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putExternalKeyManagerMetadata.parameter.externalVaultEndpointUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#external_vault_endpoint_url KmsVault#external_vault_endpoint_url}.

---

###### `oauth_metadata`<sup>Required</sup> <a name="oauth_metadata" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putExternalKeyManagerMetadata.parameter.oauthMetadata"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata">KmsVaultExternalKeyManagerMetadataOauthMetadata</a>

oauth_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#oauth_metadata KmsVault#oauth_metadata}

---

###### `private_endpoint_id`<sup>Required</sup> <a name="private_endpoint_id" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putExternalKeyManagerMetadata.parameter.privateEndpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#private_endpoint_id KmsVault#private_endpoint_id}.

---

##### `put_restore_from_file` <a name="put_restore_from_file" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putRestoreFromFile"></a>

```python
def put_restore_from_file(
  content_length: str,
  restore_vault_from_file_details: str,
  content_md5: str = None
) -> None
```

###### `content_length`<sup>Required</sup> <a name="content_length" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putRestoreFromFile.parameter.contentLength"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#content_length KmsVault#content_length}.

---

###### `restore_vault_from_file_details`<sup>Required</sup> <a name="restore_vault_from_file_details" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putRestoreFromFile.parameter.restoreVaultFromFileDetails"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#restore_vault_from_file_details KmsVault#restore_vault_from_file_details}.

---

###### `content_md5`<sup>Optional</sup> <a name="content_md5" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putRestoreFromFile.parameter.contentMd5"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#content_md5 KmsVault#content_md5}.

---

##### `put_restore_from_object_store` <a name="put_restore_from_object_store" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putRestoreFromObjectStore"></a>

```python
def put_restore_from_object_store(
  destination: str,
  bucket: str = None,
  namespace: str = None,
  object: str = None,
  uri: str = None
) -> None
```

###### `destination`<sup>Required</sup> <a name="destination" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putRestoreFromObjectStore.parameter.destination"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#destination KmsVault#destination}.

---

###### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putRestoreFromObjectStore.parameter.bucket"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#bucket KmsVault#bucket}.

---

###### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putRestoreFromObjectStore.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#namespace KmsVault#namespace}.

---

###### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putRestoreFromObjectStore.parameter.object"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#object KmsVault#object}.

---

###### `uri`<sup>Optional</sup> <a name="uri" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putRestoreFromObjectStore.parameter.uri"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#uri KmsVault#uri}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#create KmsVault#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#delete KmsVault#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#update KmsVault#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_external_key_manager_metadata` <a name="reset_external_key_manager_metadata" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetExternalKeyManagerMetadata"></a>

```python
def reset_external_key_manager_metadata() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_restore_from_file` <a name="reset_restore_from_file" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetRestoreFromFile"></a>

```python
def reset_restore_from_file() -> None
```

##### `reset_restore_from_object_store` <a name="reset_restore_from_object_store" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetRestoreFromObjectStore"></a>

```python
def reset_restore_from_object_store() -> None
```

##### `reset_restore_trigger` <a name="reset_restore_trigger" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetRestoreTrigger"></a>

```python
def reset_restore_trigger() -> None
```

##### `reset_time_of_deletion` <a name="reset_time_of_deletion" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetTimeOfDeletion"></a>

```python
def reset_time_of_deletion() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a KmsVault resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_vault

kmsVault.KmsVault.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_vault

kmsVault.KmsVault.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_vault

kmsVault.KmsVault.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_vault

kmsVault.KmsVault.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a KmsVault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the KmsVault to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing KmsVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the KmsVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.cryptoEndpoint">crypto_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.externalKeyManagerMetadata">external_key_manager_metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference">KmsVaultExternalKeyManagerMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.externalKeyManagerMetadataSummary">external_key_manager_metadata_summary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList">KmsVaultExternalKeyManagerMetadataSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.isPrimary">is_primary</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.isVaultReplicable">is_vault_replicable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.managementEndpoint">management_endpoint</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.replicaDetails">replica_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList">KmsVaultReplicaDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoredFromVaultId">restored_from_vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoreFromFile">restore_from_file</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference">KmsVaultRestoreFromFileOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoreFromObjectStore">restore_from_object_store</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference">KmsVaultRestoreFromObjectStoreOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference">KmsVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.externalKeyManagerMetadataInput">external_key_manager_metadata_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata">KmsVaultExternalKeyManagerMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoreFromFileInput">restore_from_file_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile">KmsVaultRestoreFromFile</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoreFromObjectStoreInput">restore_from_object_store_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore">KmsVaultRestoreFromObjectStore</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoreTriggerInput">restore_trigger_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.timeOfDeletionInput">time_of_deletion_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts">KmsVaultTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.vaultTypeInput">vault_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoreTrigger">restore_trigger</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.timeOfDeletion">time_of_deletion</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.vaultType">vault_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `crypto_endpoint`<sup>Required</sup> <a name="crypto_endpoint" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.cryptoEndpoint"></a>

```python
crypto_endpoint: str
```

- *Type:* str

---

##### `external_key_manager_metadata`<sup>Required</sup> <a name="external_key_manager_metadata" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.externalKeyManagerMetadata"></a>

```python
external_key_manager_metadata: KmsVaultExternalKeyManagerMetadataOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference">KmsVaultExternalKeyManagerMetadataOutputReference</a>

---

##### `external_key_manager_metadata_summary`<sup>Required</sup> <a name="external_key_manager_metadata_summary" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.externalKeyManagerMetadataSummary"></a>

```python
external_key_manager_metadata_summary: KmsVaultExternalKeyManagerMetadataSummaryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList">KmsVaultExternalKeyManagerMetadataSummaryList</a>

---

##### `is_primary`<sup>Required</sup> <a name="is_primary" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.isPrimary"></a>

```python
is_primary: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_vault_replicable`<sup>Required</sup> <a name="is_vault_replicable" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.isVaultReplicable"></a>

```python
is_vault_replicable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `management_endpoint`<sup>Required</sup> <a name="management_endpoint" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.managementEndpoint"></a>

```python
management_endpoint: str
```

- *Type:* str

---

##### `replica_details`<sup>Required</sup> <a name="replica_details" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.replicaDetails"></a>

```python
replica_details: KmsVaultReplicaDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList">KmsVaultReplicaDetailsList</a>

---

##### `restored_from_vault_id`<sup>Required</sup> <a name="restored_from_vault_id" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoredFromVaultId"></a>

```python
restored_from_vault_id: str
```

- *Type:* str

---

##### `restore_from_file`<sup>Required</sup> <a name="restore_from_file" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoreFromFile"></a>

```python
restore_from_file: KmsVaultRestoreFromFileOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference">KmsVaultRestoreFromFileOutputReference</a>

---

##### `restore_from_object_store`<sup>Required</sup> <a name="restore_from_object_store" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoreFromObjectStore"></a>

```python
restore_from_object_store: KmsVaultRestoreFromObjectStoreOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference">KmsVaultRestoreFromObjectStoreOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.timeouts"></a>

```python
timeouts: KmsVaultTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference">KmsVaultTimeoutsOutputReference</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `external_key_manager_metadata_input`<sup>Optional</sup> <a name="external_key_manager_metadata_input" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.externalKeyManagerMetadataInput"></a>

```python
external_key_manager_metadata_input: KmsVaultExternalKeyManagerMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata">KmsVaultExternalKeyManagerMetadata</a>

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `restore_from_file_input`<sup>Optional</sup> <a name="restore_from_file_input" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoreFromFileInput"></a>

```python
restore_from_file_input: KmsVaultRestoreFromFile
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile">KmsVaultRestoreFromFile</a>

---

##### `restore_from_object_store_input`<sup>Optional</sup> <a name="restore_from_object_store_input" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoreFromObjectStoreInput"></a>

```python
restore_from_object_store_input: KmsVaultRestoreFromObjectStore
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore">KmsVaultRestoreFromObjectStore</a>

---

##### `restore_trigger_input`<sup>Optional</sup> <a name="restore_trigger_input" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoreTriggerInput"></a>

```python
restore_trigger_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `time_of_deletion_input`<sup>Optional</sup> <a name="time_of_deletion_input" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.timeOfDeletionInput"></a>

```python
time_of_deletion_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, KmsVaultTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts">KmsVaultTimeouts</a>]

---

##### `vault_type_input`<sup>Optional</sup> <a name="vault_type_input" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.vaultTypeInput"></a>

```python
vault_type_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `restore_trigger`<sup>Required</sup> <a name="restore_trigger" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.restoreTrigger"></a>

```python
restore_trigger: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `time_of_deletion`<sup>Required</sup> <a name="time_of_deletion" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.timeOfDeletion"></a>

```python
time_of_deletion: str
```

- *Type:* str

---

##### `vault_type`<sup>Required</sup> <a name="vault_type" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.vaultType"></a>

```python
vault_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVault.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### KmsVaultConfig <a name="KmsVaultConfig" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_vault

kmsVault.KmsVaultConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str,
  vault_type: str,
  defined_tags: typing.Mapping[str] = None,
  external_key_manager_metadata: KmsVaultExternalKeyManagerMetadata = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  restore_from_file: KmsVaultRestoreFromFile = None,
  restore_from_object_store: KmsVaultRestoreFromObjectStore = None,
  restore_trigger: typing.Union[bool, IResolvable] = None,
  time_of_deletion: str = None,
  timeouts: KmsVaultTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#compartment_id KmsVault#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#display_name KmsVault#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.vaultType">vault_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#vault_type KmsVault#vault_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#defined_tags KmsVault#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.externalKeyManagerMetadata">external_key_manager_metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata">KmsVaultExternalKeyManagerMetadata</a></code> | external_key_manager_metadata block. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#freeform_tags KmsVault#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#id KmsVault#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.restoreFromFile">restore_from_file</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile">KmsVaultRestoreFromFile</a></code> | restore_from_file block. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.restoreFromObjectStore">restore_from_object_store</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore">KmsVaultRestoreFromObjectStore</a></code> | restore_from_object_store block. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.restoreTrigger">restore_trigger</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#restore_trigger KmsVault#restore_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.timeOfDeletion">time_of_deletion</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#time_of_deletion KmsVault#time_of_deletion}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts">KmsVaultTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#compartment_id KmsVault#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#display_name KmsVault#display_name}.

---

##### `vault_type`<sup>Required</sup> <a name="vault_type" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.vaultType"></a>

```python
vault_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#vault_type KmsVault#vault_type}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#defined_tags KmsVault#defined_tags}.

---

##### `external_key_manager_metadata`<sup>Optional</sup> <a name="external_key_manager_metadata" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.externalKeyManagerMetadata"></a>

```python
external_key_manager_metadata: KmsVaultExternalKeyManagerMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata">KmsVaultExternalKeyManagerMetadata</a>

external_key_manager_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#external_key_manager_metadata KmsVault#external_key_manager_metadata}

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#freeform_tags KmsVault#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#id KmsVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `restore_from_file`<sup>Optional</sup> <a name="restore_from_file" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.restoreFromFile"></a>

```python
restore_from_file: KmsVaultRestoreFromFile
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile">KmsVaultRestoreFromFile</a>

restore_from_file block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#restore_from_file KmsVault#restore_from_file}

---

##### `restore_from_object_store`<sup>Optional</sup> <a name="restore_from_object_store" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.restoreFromObjectStore"></a>

```python
restore_from_object_store: KmsVaultRestoreFromObjectStore
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore">KmsVaultRestoreFromObjectStore</a>

restore_from_object_store block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#restore_from_object_store KmsVault#restore_from_object_store}

---

##### `restore_trigger`<sup>Optional</sup> <a name="restore_trigger" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.restoreTrigger"></a>

```python
restore_trigger: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#restore_trigger KmsVault#restore_trigger}.

---

##### `time_of_deletion`<sup>Optional</sup> <a name="time_of_deletion" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.timeOfDeletion"></a>

```python
time_of_deletion: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#time_of_deletion KmsVault#time_of_deletion}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultConfig.property.timeouts"></a>

```python
timeouts: KmsVaultTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts">KmsVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#timeouts KmsVault#timeouts}

---

### KmsVaultExternalKeyManagerMetadata <a name="KmsVaultExternalKeyManagerMetadata" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_vault

kmsVault.KmsVaultExternalKeyManagerMetadata(
  external_vault_endpoint_url: str,
  oauth_metadata: KmsVaultExternalKeyManagerMetadataOauthMetadata,
  private_endpoint_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata.property.externalVaultEndpointUrl">external_vault_endpoint_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#external_vault_endpoint_url KmsVault#external_vault_endpoint_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata.property.oauthMetadata">oauth_metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata">KmsVaultExternalKeyManagerMetadataOauthMetadata</a></code> | oauth_metadata block. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata.property.privateEndpointId">private_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#private_endpoint_id KmsVault#private_endpoint_id}. |

---

##### `external_vault_endpoint_url`<sup>Required</sup> <a name="external_vault_endpoint_url" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata.property.externalVaultEndpointUrl"></a>

```python
external_vault_endpoint_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#external_vault_endpoint_url KmsVault#external_vault_endpoint_url}.

---

##### `oauth_metadata`<sup>Required</sup> <a name="oauth_metadata" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata.property.oauthMetadata"></a>

```python
oauth_metadata: KmsVaultExternalKeyManagerMetadataOauthMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata">KmsVaultExternalKeyManagerMetadataOauthMetadata</a>

oauth_metadata block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#oauth_metadata KmsVault#oauth_metadata}

---

##### `private_endpoint_id`<sup>Required</sup> <a name="private_endpoint_id" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata.property.privateEndpointId"></a>

```python
private_endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#private_endpoint_id KmsVault#private_endpoint_id}.

---

### KmsVaultExternalKeyManagerMetadataOauthMetadata <a name="KmsVaultExternalKeyManagerMetadataOauthMetadata" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_vault

kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata(
  client_app_id: str,
  client_app_secret: str,
  idcs_account_name_url: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata.property.clientAppId">client_app_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#client_app_id KmsVault#client_app_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata.property.clientAppSecret">client_app_secret</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#client_app_secret KmsVault#client_app_secret}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata.property.idcsAccountNameUrl">idcs_account_name_url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#idcs_account_name_url KmsVault#idcs_account_name_url}. |

---

##### `client_app_id`<sup>Required</sup> <a name="client_app_id" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata.property.clientAppId"></a>

```python
client_app_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#client_app_id KmsVault#client_app_id}.

---

##### `client_app_secret`<sup>Required</sup> <a name="client_app_secret" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata.property.clientAppSecret"></a>

```python
client_app_secret: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#client_app_secret KmsVault#client_app_secret}.

---

##### `idcs_account_name_url`<sup>Required</sup> <a name="idcs_account_name_url" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata.property.idcsAccountNameUrl"></a>

```python
idcs_account_name_url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#idcs_account_name_url KmsVault#idcs_account_name_url}.

---

### KmsVaultExternalKeyManagerMetadataSummary <a name="KmsVaultExternalKeyManagerMetadataSummary" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummary.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_vault

kmsVault.KmsVaultExternalKeyManagerMetadataSummary()
```


### KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary <a name="KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_vault

kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary()
```


### KmsVaultReplicaDetails <a name="KmsVaultReplicaDetails" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_vault

kmsVault.KmsVaultReplicaDetails()
```


### KmsVaultRestoreFromFile <a name="KmsVaultRestoreFromFile" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_vault

kmsVault.KmsVaultRestoreFromFile(
  content_length: str,
  restore_vault_from_file_details: str,
  content_md5: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile.property.contentLength">content_length</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#content_length KmsVault#content_length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile.property.restoreVaultFromFileDetails">restore_vault_from_file_details</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#restore_vault_from_file_details KmsVault#restore_vault_from_file_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile.property.contentMd5">content_md5</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#content_md5 KmsVault#content_md5}. |

---

##### `content_length`<sup>Required</sup> <a name="content_length" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile.property.contentLength"></a>

```python
content_length: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#content_length KmsVault#content_length}.

---

##### `restore_vault_from_file_details`<sup>Required</sup> <a name="restore_vault_from_file_details" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile.property.restoreVaultFromFileDetails"></a>

```python
restore_vault_from_file_details: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#restore_vault_from_file_details KmsVault#restore_vault_from_file_details}.

---

##### `content_md5`<sup>Optional</sup> <a name="content_md5" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile.property.contentMd5"></a>

```python
content_md5: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#content_md5 KmsVault#content_md5}.

---

### KmsVaultRestoreFromObjectStore <a name="KmsVaultRestoreFromObjectStore" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_vault

kmsVault.KmsVaultRestoreFromObjectStore(
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
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore.property.destination">destination</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#destination KmsVault#destination}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore.property.bucket">bucket</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#bucket KmsVault#bucket}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#namespace KmsVault#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore.property.object">object</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#object KmsVault#object}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore.property.uri">uri</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#uri KmsVault#uri}. |

---

##### `destination`<sup>Required</sup> <a name="destination" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore.property.destination"></a>

```python
destination: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#destination KmsVault#destination}.

---

##### `bucket`<sup>Optional</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#bucket KmsVault#bucket}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#namespace KmsVault#namespace}.

---

##### `object`<sup>Optional</sup> <a name="object" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore.property.object"></a>

```python
object: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#object KmsVault#object}.

---

##### `uri`<sup>Optional</sup> <a name="uri" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore.property.uri"></a>

```python
uri: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#uri KmsVault#uri}.

---

### KmsVaultTimeouts <a name="KmsVaultTimeouts" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_vault

kmsVault.KmsVaultTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#create KmsVault#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#delete KmsVault#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#update KmsVault#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#create KmsVault#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#delete KmsVault#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#update KmsVault#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference <a name="KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_vault

kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.clientAppIdInput">client_app_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.clientAppSecretInput">client_app_secret_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.idcsAccountNameUrlInput">idcs_account_name_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.clientAppId">client_app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.clientAppSecret">client_app_secret</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.idcsAccountNameUrl">idcs_account_name_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata">KmsVaultExternalKeyManagerMetadataOauthMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_app_id_input`<sup>Optional</sup> <a name="client_app_id_input" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.clientAppIdInput"></a>

```python
client_app_id_input: str
```

- *Type:* str

---

##### `client_app_secret_input`<sup>Optional</sup> <a name="client_app_secret_input" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.clientAppSecretInput"></a>

```python
client_app_secret_input: str
```

- *Type:* str

---

##### `idcs_account_name_url_input`<sup>Optional</sup> <a name="idcs_account_name_url_input" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.idcsAccountNameUrlInput"></a>

```python
idcs_account_name_url_input: str
```

- *Type:* str

---

##### `client_app_id`<sup>Required</sup> <a name="client_app_id" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.clientAppId"></a>

```python
client_app_id: str
```

- *Type:* str

---

##### `client_app_secret`<sup>Required</sup> <a name="client_app_secret" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.clientAppSecret"></a>

```python
client_app_secret: str
```

- *Type:* str

---

##### `idcs_account_name_url`<sup>Required</sup> <a name="idcs_account_name_url" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.idcsAccountNameUrl"></a>

```python
idcs_account_name_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference.property.internalValue"></a>

```python
internal_value: KmsVaultExternalKeyManagerMetadataOauthMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata">KmsVaultExternalKeyManagerMetadataOauthMetadata</a>

---


### KmsVaultExternalKeyManagerMetadataOutputReference <a name="KmsVaultExternalKeyManagerMetadataOutputReference" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_vault

kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.putOauthMetadata">put_oauth_metadata</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_oauth_metadata` <a name="put_oauth_metadata" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.putOauthMetadata"></a>

```python
def put_oauth_metadata(
  client_app_id: str,
  client_app_secret: str,
  idcs_account_name_url: str
) -> None
```

###### `client_app_id`<sup>Required</sup> <a name="client_app_id" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.putOauthMetadata.parameter.clientAppId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#client_app_id KmsVault#client_app_id}.

---

###### `client_app_secret`<sup>Required</sup> <a name="client_app_secret" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.putOauthMetadata.parameter.clientAppSecret"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#client_app_secret KmsVault#client_app_secret}.

---

###### `idcs_account_name_url`<sup>Required</sup> <a name="idcs_account_name_url" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.putOauthMetadata.parameter.idcsAccountNameUrl"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/kms_vault#idcs_account_name_url KmsVault#idcs_account_name_url}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.oauthMetadata">oauth_metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference">KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.externalVaultEndpointUrlInput">external_vault_endpoint_url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.oauthMetadataInput">oauth_metadata_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata">KmsVaultExternalKeyManagerMetadataOauthMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.privateEndpointIdInput">private_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.externalVaultEndpointUrl">external_vault_endpoint_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.privateEndpointId">private_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata">KmsVaultExternalKeyManagerMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `oauth_metadata`<sup>Required</sup> <a name="oauth_metadata" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.oauthMetadata"></a>

```python
oauth_metadata: KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference">KmsVaultExternalKeyManagerMetadataOauthMetadataOutputReference</a>

---

##### `external_vault_endpoint_url_input`<sup>Optional</sup> <a name="external_vault_endpoint_url_input" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.externalVaultEndpointUrlInput"></a>

```python
external_vault_endpoint_url_input: str
```

- *Type:* str

---

##### `oauth_metadata_input`<sup>Optional</sup> <a name="oauth_metadata_input" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.oauthMetadataInput"></a>

```python
oauth_metadata_input: KmsVaultExternalKeyManagerMetadataOauthMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOauthMetadata">KmsVaultExternalKeyManagerMetadataOauthMetadata</a>

---

##### `private_endpoint_id_input`<sup>Optional</sup> <a name="private_endpoint_id_input" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.privateEndpointIdInput"></a>

```python
private_endpoint_id_input: str
```

- *Type:* str

---

##### `external_vault_endpoint_url`<sup>Required</sup> <a name="external_vault_endpoint_url" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.externalVaultEndpointUrl"></a>

```python
external_vault_endpoint_url: str
```

- *Type:* str

---

##### `private_endpoint_id`<sup>Required</sup> <a name="private_endpoint_id" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.privateEndpointId"></a>

```python
private_endpoint_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataOutputReference.property.internalValue"></a>

```python
internal_value: KmsVaultExternalKeyManagerMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadata">KmsVaultExternalKeyManagerMetadata</a>

---


### KmsVaultExternalKeyManagerMetadataSummaryList <a name="KmsVaultExternalKeyManagerMetadataSummaryList" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_vault

kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KmsVaultExternalKeyManagerMetadataSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList <a name="KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_vault

kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference <a name="KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_vault

kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.property.clientAppId">client_app_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.property.idcsAccountNameUrl">idcs_account_name_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary">KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_app_id`<sup>Required</sup> <a name="client_app_id" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.property.clientAppId"></a>

```python
client_app_id: str
```

- *Type:* str

---

##### `idcs_account_name_url`<sup>Required</sup> <a name="idcs_account_name_url" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.property.idcsAccountNameUrl"></a>

```python
idcs_account_name_url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryOutputReference.property.internalValue"></a>

```python
internal_value: KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary">KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummary</a>

---


### KmsVaultExternalKeyManagerMetadataSummaryOutputReference <a name="KmsVaultExternalKeyManagerMetadataSummaryOutputReference" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_vault

kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.externalVaultEndpointUrl">external_vault_endpoint_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.oauthMetadataSummary">oauth_metadata_summary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList">KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.privateEndpointId">private_endpoint_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.vendor">vendor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummary">KmsVaultExternalKeyManagerMetadataSummary</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `external_vault_endpoint_url`<sup>Required</sup> <a name="external_vault_endpoint_url" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.externalVaultEndpointUrl"></a>

```python
external_vault_endpoint_url: str
```

- *Type:* str

---

##### `oauth_metadata_summary`<sup>Required</sup> <a name="oauth_metadata_summary" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.oauthMetadataSummary"></a>

```python
oauth_metadata_summary: KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList">KmsVaultExternalKeyManagerMetadataSummaryOauthMetadataSummaryList</a>

---

##### `private_endpoint_id`<sup>Required</sup> <a name="private_endpoint_id" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.privateEndpointId"></a>

```python
private_endpoint_id: str
```

- *Type:* str

---

##### `vendor`<sup>Required</sup> <a name="vendor" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.vendor"></a>

```python
vendor: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummaryOutputReference.property.internalValue"></a>

```python
internal_value: KmsVaultExternalKeyManagerMetadataSummary
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultExternalKeyManagerMetadataSummary">KmsVaultExternalKeyManagerMetadataSummary</a>

---


### KmsVaultReplicaDetailsList <a name="KmsVaultReplicaDetailsList" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_vault

kmsVault.KmsVaultReplicaDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> KmsVaultReplicaDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### KmsVaultReplicaDetailsOutputReference <a name="KmsVaultReplicaDetailsOutputReference" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_vault

kmsVault.KmsVaultReplicaDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.property.replicationId">replication_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetails">KmsVaultReplicaDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `replication_id`<sup>Required</sup> <a name="replication_id" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.property.replicationId"></a>

```python
replication_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetailsOutputReference.property.internalValue"></a>

```python
internal_value: KmsVaultReplicaDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultReplicaDetails">KmsVaultReplicaDetails</a>

---


### KmsVaultRestoreFromFileOutputReference <a name="KmsVaultRestoreFromFileOutputReference" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_vault

kmsVault.KmsVaultRestoreFromFileOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.resetContentMd5">reset_content_md5</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_content_md5` <a name="reset_content_md5" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.resetContentMd5"></a>

```python
def reset_content_md5() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.contentLengthInput">content_length_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.contentMd5Input">content_md5_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.restoreVaultFromFileDetailsInput">restore_vault_from_file_details_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.contentLength">content_length</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.contentMd5">content_md5</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.restoreVaultFromFileDetails">restore_vault_from_file_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile">KmsVaultRestoreFromFile</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content_length_input`<sup>Optional</sup> <a name="content_length_input" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.contentLengthInput"></a>

```python
content_length_input: str
```

- *Type:* str

---

##### `content_md5_input`<sup>Optional</sup> <a name="content_md5_input" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.contentMd5Input"></a>

```python
content_md5_input: str
```

- *Type:* str

---

##### `restore_vault_from_file_details_input`<sup>Optional</sup> <a name="restore_vault_from_file_details_input" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.restoreVaultFromFileDetailsInput"></a>

```python
restore_vault_from_file_details_input: str
```

- *Type:* str

---

##### `content_length`<sup>Required</sup> <a name="content_length" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.contentLength"></a>

```python
content_length: str
```

- *Type:* str

---

##### `content_md5`<sup>Required</sup> <a name="content_md5" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.contentMd5"></a>

```python
content_md5: str
```

- *Type:* str

---

##### `restore_vault_from_file_details`<sup>Required</sup> <a name="restore_vault_from_file_details" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.restoreVaultFromFileDetails"></a>

```python
restore_vault_from_file_details: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFileOutputReference.property.internalValue"></a>

```python
internal_value: KmsVaultRestoreFromFile
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromFile">KmsVaultRestoreFromFile</a>

---


### KmsVaultRestoreFromObjectStoreOutputReference <a name="KmsVaultRestoreFromObjectStoreOutputReference" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_vault

kmsVault.KmsVaultRestoreFromObjectStoreOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.resetBucket">reset_bucket</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.resetObject">reset_object</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.resetUri">reset_uri</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_bucket` <a name="reset_bucket" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.resetBucket"></a>

```python
def reset_bucket() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_object` <a name="reset_object" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.resetObject"></a>

```python
def reset_object() -> None
```

##### `reset_uri` <a name="reset_uri" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.resetUri"></a>

```python
def reset_uri() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.bucketInput">bucket_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.destinationInput">destination_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.objectInput">object_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.uriInput">uri_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.bucket">bucket</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.destination">destination</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.uri">uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore">KmsVaultRestoreFromObjectStore</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `bucket_input`<sup>Optional</sup> <a name="bucket_input" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.bucketInput"></a>

```python
bucket_input: str
```

- *Type:* str

---

##### `destination_input`<sup>Optional</sup> <a name="destination_input" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.destinationInput"></a>

```python
destination_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `object_input`<sup>Optional</sup> <a name="object_input" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.objectInput"></a>

```python
object_input: str
```

- *Type:* str

---

##### `uri_input`<sup>Optional</sup> <a name="uri_input" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.uriInput"></a>

```python
uri_input: str
```

- *Type:* str

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.bucket"></a>

```python
bucket: str
```

- *Type:* str

---

##### `destination`<sup>Required</sup> <a name="destination" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.destination"></a>

```python
destination: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `uri`<sup>Required</sup> <a name="uri" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.uri"></a>

```python
uri: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStoreOutputReference.property.internalValue"></a>

```python
internal_value: KmsVaultRestoreFromObjectStore
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultRestoreFromObjectStore">KmsVaultRestoreFromObjectStore</a>

---


### KmsVaultTimeoutsOutputReference <a name="KmsVaultTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import kms_vault

kmsVault.KmsVaultTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts">KmsVaultTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, KmsVaultTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.kmsVault.KmsVaultTimeouts">KmsVaultTimeouts</a>]

---



