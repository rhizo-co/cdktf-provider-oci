# `dataOciManagementAgentManagementAgentInstallKeys` Submodule <a name="`dataOciManagementAgentManagementAgentInstallKeys` Submodule" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciManagementAgentManagementAgentInstallKeys <a name="DataOciManagementAgentManagementAgentInstallKeys" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys oci_management_agent_management_agent_install_keys}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_install_keys

dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys(
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
  access_level: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciManagementAgentManagementAgentInstallKeysFilter]] = None,
  id: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#compartment_id DataOciManagementAgentManagementAgentInstallKeys#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.Initializer.parameter.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#access_level DataOciManagementAgentManagementAgentInstallKeys#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#compartment_id_in_subtree DataOciManagementAgentManagementAgentInstallKeys#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#display_name DataOciManagementAgentManagementAgentInstallKeys#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilter">DataOciManagementAgentManagementAgentInstallKeysFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#id DataOciManagementAgentManagementAgentInstallKeys#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#state DataOciManagementAgentManagementAgentInstallKeys#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#compartment_id DataOciManagementAgentManagementAgentInstallKeys#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.Initializer.parameter.accessLevel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#access_level DataOciManagementAgentManagementAgentInstallKeys#access_level}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#compartment_id_in_subtree DataOciManagementAgentManagementAgentInstallKeys#compartment_id_in_subtree}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#display_name DataOciManagementAgentManagementAgentInstallKeys#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilter">DataOciManagementAgentManagementAgentInstallKeysFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#filter DataOciManagementAgentManagementAgentInstallKeys#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#id DataOciManagementAgentManagementAgentInstallKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#state DataOciManagementAgentManagementAgentInstallKeys#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.resetAccessLevel">reset_access_level</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.resetCompartmentIdInSubtree">reset_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciManagementAgentManagementAgentInstallKeysFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilter">DataOciManagementAgentManagementAgentInstallKeysFilter</a>]]

---

##### `reset_access_level` <a name="reset_access_level" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.resetAccessLevel"></a>

```python
def reset_access_level() -> None
```

##### `reset_compartment_id_in_subtree` <a name="reset_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.resetCompartmentIdInSubtree"></a>

```python
def reset_compartment_id_in_subtree() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciManagementAgentManagementAgentInstallKeys resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_install_keys

dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_install_keys

dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_install_keys

dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_install_keys

dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciManagementAgentManagementAgentInstallKeys resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciManagementAgentManagementAgentInstallKeys to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciManagementAgentManagementAgentInstallKeys that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciManagementAgentManagementAgentInstallKeys to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList">DataOciManagementAgentManagementAgentInstallKeysFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.managementAgentInstallKeys">management_agent_install_keys</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList">DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.accessLevelInput">access_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilter">DataOciManagementAgentManagementAgentInstallKeysFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.accessLevel">access_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.filter"></a>

```python
filter: DataOciManagementAgentManagementAgentInstallKeysFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList">DataOciManagementAgentManagementAgentInstallKeysFilterList</a>

---

##### `management_agent_install_keys`<sup>Required</sup> <a name="management_agent_install_keys" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.managementAgentInstallKeys"></a>

```python
management_agent_install_keys: DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList">DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList</a>

---

##### `access_level_input`<sup>Optional</sup> <a name="access_level_input" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.accessLevelInput"></a>

```python
access_level_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciManagementAgentManagementAgentInstallKeysFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilter">DataOciManagementAgentManagementAgentInstallKeysFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `access_level`<sup>Required</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeys.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciManagementAgentManagementAgentInstallKeysConfig <a name="DataOciManagementAgentManagementAgentInstallKeysConfig" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_install_keys

dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  access_level: str = None,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciManagementAgentManagementAgentInstallKeysFilter]] = None,
  id: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#compartment_id DataOciManagementAgentManagementAgentInstallKeys#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.accessLevel">access_level</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#access_level DataOciManagementAgentManagementAgentInstallKeys#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#compartment_id_in_subtree DataOciManagementAgentManagementAgentInstallKeys#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#display_name DataOciManagementAgentManagementAgentInstallKeys#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilter">DataOciManagementAgentManagementAgentInstallKeysFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#id DataOciManagementAgentManagementAgentInstallKeys#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#state DataOciManagementAgentManagementAgentInstallKeys#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#compartment_id DataOciManagementAgentManagementAgentInstallKeys#compartment_id}.

---

##### `access_level`<sup>Optional</sup> <a name="access_level" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.accessLevel"></a>

```python
access_level: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#access_level DataOciManagementAgentManagementAgentInstallKeys#access_level}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#compartment_id_in_subtree DataOciManagementAgentManagementAgentInstallKeys#compartment_id_in_subtree}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#display_name DataOciManagementAgentManagementAgentInstallKeys#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciManagementAgentManagementAgentInstallKeysFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilter">DataOciManagementAgentManagementAgentInstallKeysFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#filter DataOciManagementAgentManagementAgentInstallKeys#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#id DataOciManagementAgentManagementAgentInstallKeys#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#state DataOciManagementAgentManagementAgentInstallKeys#state}.

---

### DataOciManagementAgentManagementAgentInstallKeysFilter <a name="DataOciManagementAgentManagementAgentInstallKeysFilter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_install_keys

dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#name DataOciManagementAgentManagementAgentInstallKeys#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#values DataOciManagementAgentManagementAgentInstallKeys#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#regex DataOciManagementAgentManagementAgentInstallKeys#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#name DataOciManagementAgentManagementAgentInstallKeys#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#values DataOciManagementAgentManagementAgentInstallKeys#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_install_keys#regex DataOciManagementAgentManagementAgentInstallKeys#regex}.

---

### DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeys <a name="DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeys" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeys"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeys.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_install_keys

dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeys()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciManagementAgentManagementAgentInstallKeysFilterList <a name="DataOciManagementAgentManagementAgentInstallKeysFilterList" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_install_keys

dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilter">DataOciManagementAgentManagementAgentInstallKeysFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciManagementAgentManagementAgentInstallKeysFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilter">DataOciManagementAgentManagementAgentInstallKeysFilter</a>]]

---


### DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference <a name="DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_install_keys

dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilter">DataOciManagementAgentManagementAgentInstallKeysFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciManagementAgentManagementAgentInstallKeysFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysFilter">DataOciManagementAgentManagementAgentInstallKeysFilter</a>]

---


### DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList <a name="DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_install_keys

dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference <a name="DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_install_keys

dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.allowedKeyInstallCount">allowed_key_install_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.createdByPrincipalId">created_by_principal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.currentKeyInstallCount">current_key_install_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.isUnlimited">is_unlimited</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.timeExpires">time_expires</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeys">DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeys</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allowed_key_install_count`<sup>Required</sup> <a name="allowed_key_install_count" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.allowedKeyInstallCount"></a>

```python
allowed_key_install_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `created_by_principal_id`<sup>Required</sup> <a name="created_by_principal_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.createdByPrincipalId"></a>

```python
created_by_principal_id: str
```

- *Type:* str

---

##### `current_key_install_count`<sup>Required</sup> <a name="current_key_install_count" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.currentKeyInstallCount"></a>

```python
current_key_install_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_unlimited`<sup>Required</sup> <a name="is_unlimited" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.isUnlimited"></a>

```python
is_unlimited: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_expires`<sup>Required</sup> <a name="time_expires" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.timeExpires"></a>

```python
time_expires: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeysOutputReference.property.internalValue"></a>

```python
internal_value: DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeys
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentInstallKeys.DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeys">DataOciManagementAgentManagementAgentInstallKeysManagementAgentInstallKeys</a>

---



