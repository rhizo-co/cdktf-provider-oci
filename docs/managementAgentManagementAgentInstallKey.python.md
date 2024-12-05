# `managementAgentManagementAgentInstallKey` Submodule <a name="`managementAgentManagementAgentInstallKey` Submodule" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ManagementAgentManagementAgentInstallKey <a name="ManagementAgentManagementAgentInstallKey" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key oci_management_agent_management_agent_install_key}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent_install_key

managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey(
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
  allowed_key_install_count: typing.Union[int, float] = None,
  id: str = None,
  is_unlimited: typing.Union[bool, IResolvable] = None,
  time_expires: str = None,
  timeouts: ManagementAgentManagementAgentInstallKeyTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#compartment_id ManagementAgentManagementAgentInstallKey#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#display_name ManagementAgentManagementAgentInstallKey#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.allowedKeyInstallCount">allowed_key_install_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#allowed_key_install_count ManagementAgentManagementAgentInstallKey#allowed_key_install_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#id ManagementAgentManagementAgentInstallKey#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.isUnlimited">is_unlimited</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#is_unlimited ManagementAgentManagementAgentInstallKey#is_unlimited}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.timeExpires">time_expires</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#time_expires ManagementAgentManagementAgentInstallKey#time_expires}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts">ManagementAgentManagementAgentInstallKeyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#compartment_id ManagementAgentManagementAgentInstallKey#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#display_name ManagementAgentManagementAgentInstallKey#display_name}.

---

##### `allowed_key_install_count`<sup>Optional</sup> <a name="allowed_key_install_count" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.allowedKeyInstallCount"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#allowed_key_install_count ManagementAgentManagementAgentInstallKey#allowed_key_install_count}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#id ManagementAgentManagementAgentInstallKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_unlimited`<sup>Optional</sup> <a name="is_unlimited" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.isUnlimited"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#is_unlimited ManagementAgentManagementAgentInstallKey#is_unlimited}.

---

##### `time_expires`<sup>Optional</sup> <a name="time_expires" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.timeExpires"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#time_expires ManagementAgentManagementAgentInstallKey#time_expires}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts">ManagementAgentManagementAgentInstallKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#timeouts ManagementAgentManagementAgentInstallKey#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetAllowedKeyInstallCount">reset_allowed_key_install_count</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetIsUnlimited">reset_is_unlimited</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetTimeExpires">reset_time_expires</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#create ManagementAgentManagementAgentInstallKey#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#delete ManagementAgentManagementAgentInstallKey#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#update ManagementAgentManagementAgentInstallKey#update}.

---

##### `reset_allowed_key_install_count` <a name="reset_allowed_key_install_count" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetAllowedKeyInstallCount"></a>

```python
def reset_allowed_key_install_count() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_unlimited` <a name="reset_is_unlimited" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetIsUnlimited"></a>

```python
def reset_is_unlimited() -> None
```

##### `reset_time_expires` <a name="reset_time_expires" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetTimeExpires"></a>

```python
def reset_time_expires() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a ManagementAgentManagementAgentInstallKey resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent_install_key

managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent_install_key

managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent_install_key

managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent_install_key

managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a ManagementAgentManagementAgentInstallKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the ManagementAgentManagementAgentInstallKey to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing ManagementAgentManagementAgentInstallKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ManagementAgentManagementAgentInstallKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.createdByPrincipalId">created_by_principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.currentKeyInstallCount">current_key_install_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference">ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.allowedKeyInstallCountInput">allowed_key_install_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.isUnlimitedInput">is_unlimited_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeExpiresInput">time_expires_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts">ManagementAgentManagementAgentInstallKeyTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.allowedKeyInstallCount">allowed_key_install_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.isUnlimited">is_unlimited</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeExpires">time_expires</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `created_by_principal_id`<sup>Required</sup> <a name="created_by_principal_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.createdByPrincipalId"></a>

```python
created_by_principal_id: str
```

- *Type:* str

---

##### `current_key_install_count`<sup>Required</sup> <a name="current_key_install_count" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.currentKeyInstallCount"></a>

```python
current_key_install_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeouts"></a>

```python
timeouts: ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference">ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `allowed_key_install_count_input`<sup>Optional</sup> <a name="allowed_key_install_count_input" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.allowedKeyInstallCountInput"></a>

```python
allowed_key_install_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_unlimited_input`<sup>Optional</sup> <a name="is_unlimited_input" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.isUnlimitedInput"></a>

```python
is_unlimited_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `time_expires_input`<sup>Optional</sup> <a name="time_expires_input" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeExpiresInput"></a>

```python
time_expires_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, ManagementAgentManagementAgentInstallKeyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts">ManagementAgentManagementAgentInstallKeyTimeouts</a>]

---

##### `allowed_key_install_count`<sup>Required</sup> <a name="allowed_key_install_count" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.allowedKeyInstallCount"></a>

```python
allowed_key_install_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_unlimited`<sup>Required</sup> <a name="is_unlimited" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.isUnlimited"></a>

```python
is_unlimited: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `time_expires`<sup>Required</sup> <a name="time_expires" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.timeExpires"></a>

```python
time_expires: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### ManagementAgentManagementAgentInstallKeyConfig <a name="ManagementAgentManagementAgentInstallKeyConfig" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent_install_key

managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  display_name: str,
  allowed_key_install_count: typing.Union[int, float] = None,
  id: str = None,
  is_unlimited: typing.Union[bool, IResolvable] = None,
  time_expires: str = None,
  timeouts: ManagementAgentManagementAgentInstallKeyTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#compartment_id ManagementAgentManagementAgentInstallKey#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#display_name ManagementAgentManagementAgentInstallKey#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.allowedKeyInstallCount">allowed_key_install_count</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#allowed_key_install_count ManagementAgentManagementAgentInstallKey#allowed_key_install_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#id ManagementAgentManagementAgentInstallKey#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.isUnlimited">is_unlimited</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#is_unlimited ManagementAgentManagementAgentInstallKey#is_unlimited}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.timeExpires">time_expires</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#time_expires ManagementAgentManagementAgentInstallKey#time_expires}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts">ManagementAgentManagementAgentInstallKeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#compartment_id ManagementAgentManagementAgentInstallKey#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#display_name ManagementAgentManagementAgentInstallKey#display_name}.

---

##### `allowed_key_install_count`<sup>Optional</sup> <a name="allowed_key_install_count" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.allowedKeyInstallCount"></a>

```python
allowed_key_install_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#allowed_key_install_count ManagementAgentManagementAgentInstallKey#allowed_key_install_count}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#id ManagementAgentManagementAgentInstallKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_unlimited`<sup>Optional</sup> <a name="is_unlimited" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.isUnlimited"></a>

```python
is_unlimited: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#is_unlimited ManagementAgentManagementAgentInstallKey#is_unlimited}.

---

##### `time_expires`<sup>Optional</sup> <a name="time_expires" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.timeExpires"></a>

```python
time_expires: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#time_expires ManagementAgentManagementAgentInstallKey#time_expires}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyConfig.property.timeouts"></a>

```python
timeouts: ManagementAgentManagementAgentInstallKeyTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts">ManagementAgentManagementAgentInstallKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#timeouts ManagementAgentManagementAgentInstallKey#timeouts}

---

### ManagementAgentManagementAgentInstallKeyTimeouts <a name="ManagementAgentManagementAgentInstallKeyTimeouts" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent_install_key

managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#create ManagementAgentManagementAgentInstallKey#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#delete ManagementAgentManagementAgentInstallKey#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#update ManagementAgentManagementAgentInstallKey#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#create ManagementAgentManagementAgentInstallKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#delete ManagementAgentManagementAgentInstallKey#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/management_agent_management_agent_install_key#update ManagementAgentManagementAgentInstallKey#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference <a name="ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import management_agent_management_agent_install_key

managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts">ManagementAgentManagementAgentInstallKeyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, ManagementAgentManagementAgentInstallKeyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.managementAgentManagementAgentInstallKey.ManagementAgentManagementAgentInstallKeyTimeouts">ManagementAgentManagementAgentInstallKeyTimeouts</a>]

---



