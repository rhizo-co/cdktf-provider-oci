# `dataOciManagementAgentManagementAgentPlugins` Submodule <a name="`dataOciManagementAgentManagementAgentPlugins` Submodule" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciManagementAgentManagementAgentPlugins <a name="DataOciManagementAgentManagementAgentPlugins" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins oci_management_agent_management_agent_plugins}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_plugins

dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins(
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
  agent_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciManagementAgentManagementAgentPluginsFilter]] = None,
  id: str = None,
  platform_type: typing.List[str] = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#compartment_id DataOciManagementAgentManagementAgentPlugins#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.Initializer.parameter.agentId">agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#agent_id DataOciManagementAgentManagementAgentPlugins#agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#display_name DataOciManagementAgentManagementAgentPlugins#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilter">DataOciManagementAgentManagementAgentPluginsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#id DataOciManagementAgentManagementAgentPlugins#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.Initializer.parameter.platformType">platform_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#platform_type DataOciManagementAgentManagementAgentPlugins#platform_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#state DataOciManagementAgentManagementAgentPlugins#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#compartment_id DataOciManagementAgentManagementAgentPlugins#compartment_id}.

---

##### `agent_id`<sup>Optional</sup> <a name="agent_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.Initializer.parameter.agentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#agent_id DataOciManagementAgentManagementAgentPlugins#agent_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#display_name DataOciManagementAgentManagementAgentPlugins#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilter">DataOciManagementAgentManagementAgentPluginsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#filter DataOciManagementAgentManagementAgentPlugins#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#id DataOciManagementAgentManagementAgentPlugins#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `platform_type`<sup>Optional</sup> <a name="platform_type" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.Initializer.parameter.platformType"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#platform_type DataOciManagementAgentManagementAgentPlugins#platform_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#state DataOciManagementAgentManagementAgentPlugins#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.resetAgentId">reset_agent_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.resetPlatformType">reset_platform_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciManagementAgentManagementAgentPluginsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilter">DataOciManagementAgentManagementAgentPluginsFilter</a>]]

---

##### `reset_agent_id` <a name="reset_agent_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.resetAgentId"></a>

```python
def reset_agent_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_platform_type` <a name="reset_platform_type" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.resetPlatformType"></a>

```python
def reset_platform_type() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciManagementAgentManagementAgentPlugins resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_plugins

dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_plugins

dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_plugins

dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_plugins

dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciManagementAgentManagementAgentPlugins resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciManagementAgentManagementAgentPlugins to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciManagementAgentManagementAgentPlugins that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciManagementAgentManagementAgentPlugins to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList">DataOciManagementAgentManagementAgentPluginsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.managementAgentPlugins">management_agent_plugins</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList">DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.agentIdInput">agent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilter">DataOciManagementAgentManagementAgentPluginsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.platformTypeInput">platform_type_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.agentId">agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.platformType">platform_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.filter"></a>

```python
filter: DataOciManagementAgentManagementAgentPluginsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList">DataOciManagementAgentManagementAgentPluginsFilterList</a>

---

##### `management_agent_plugins`<sup>Required</sup> <a name="management_agent_plugins" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.managementAgentPlugins"></a>

```python
management_agent_plugins: DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList">DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList</a>

---

##### `agent_id_input`<sup>Optional</sup> <a name="agent_id_input" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.agentIdInput"></a>

```python
agent_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciManagementAgentManagementAgentPluginsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilter">DataOciManagementAgentManagementAgentPluginsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `platform_type_input`<sup>Optional</sup> <a name="platform_type_input" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.platformTypeInput"></a>

```python
platform_type_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `agent_id`<sup>Required</sup> <a name="agent_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `platform_type`<sup>Required</sup> <a name="platform_type" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.platformType"></a>

```python
platform_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPlugins.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciManagementAgentManagementAgentPluginsConfig <a name="DataOciManagementAgentManagementAgentPluginsConfig" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_plugins

dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  agent_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciManagementAgentManagementAgentPluginsFilter]] = None,
  id: str = None,
  platform_type: typing.List[str] = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#compartment_id DataOciManagementAgentManagementAgentPlugins#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.agentId">agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#agent_id DataOciManagementAgentManagementAgentPlugins#agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#display_name DataOciManagementAgentManagementAgentPlugins#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilter">DataOciManagementAgentManagementAgentPluginsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#id DataOciManagementAgentManagementAgentPlugins#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.platformType">platform_type</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#platform_type DataOciManagementAgentManagementAgentPlugins#platform_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#state DataOciManagementAgentManagementAgentPlugins#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#compartment_id DataOciManagementAgentManagementAgentPlugins#compartment_id}.

---

##### `agent_id`<sup>Optional</sup> <a name="agent_id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.agentId"></a>

```python
agent_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#agent_id DataOciManagementAgentManagementAgentPlugins#agent_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#display_name DataOciManagementAgentManagementAgentPlugins#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciManagementAgentManagementAgentPluginsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilter">DataOciManagementAgentManagementAgentPluginsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#filter DataOciManagementAgentManagementAgentPlugins#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#id DataOciManagementAgentManagementAgentPlugins#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `platform_type`<sup>Optional</sup> <a name="platform_type" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.platformType"></a>

```python
platform_type: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#platform_type DataOciManagementAgentManagementAgentPlugins#platform_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#state DataOciManagementAgentManagementAgentPlugins#state}.

---

### DataOciManagementAgentManagementAgentPluginsFilter <a name="DataOciManagementAgentManagementAgentPluginsFilter" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_plugins

dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#name DataOciManagementAgentManagementAgentPlugins#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#values DataOciManagementAgentManagementAgentPlugins#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#regex DataOciManagementAgentManagementAgentPlugins#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#name DataOciManagementAgentManagementAgentPlugins#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#values DataOciManagementAgentManagementAgentPlugins#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/management_agent_management_agent_plugins#regex DataOciManagementAgentManagementAgentPlugins#regex}.

---

### DataOciManagementAgentManagementAgentPluginsManagementAgentPlugins <a name="DataOciManagementAgentManagementAgentPluginsManagementAgentPlugins" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPlugins"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPlugins.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_plugins

dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPlugins()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciManagementAgentManagementAgentPluginsFilterList <a name="DataOciManagementAgentManagementAgentPluginsFilterList" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_plugins

dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciManagementAgentManagementAgentPluginsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilter">DataOciManagementAgentManagementAgentPluginsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciManagementAgentManagementAgentPluginsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilter">DataOciManagementAgentManagementAgentPluginsFilter</a>]]

---


### DataOciManagementAgentManagementAgentPluginsFilterOutputReference <a name="DataOciManagementAgentManagementAgentPluginsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_plugins

dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilter">DataOciManagementAgentManagementAgentPluginsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciManagementAgentManagementAgentPluginsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsFilter">DataOciManagementAgentManagementAgentPluginsFilter</a>]

---


### DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList <a name="DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_plugins

dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference <a name="DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_management_agent_management_agent_plugins

dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.isConsoleDeployable">is_console_deployable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.supportedPlatformTypes">supported_platform_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPlugins">DataOciManagementAgentManagementAgentPluginsManagementAgentPlugins</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_console_deployable`<sup>Required</sup> <a name="is_console_deployable" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.isConsoleDeployable"></a>

```python
is_console_deployable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `supported_platform_types`<sup>Required</sup> <a name="supported_platform_types" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.supportedPlatformTypes"></a>

```python
supported_platform_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPluginsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciManagementAgentManagementAgentPluginsManagementAgentPlugins
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciManagementAgentManagementAgentPlugins.DataOciManagementAgentManagementAgentPluginsManagementAgentPlugins">DataOciManagementAgentManagementAgentPluginsManagementAgentPlugins</a>

---



