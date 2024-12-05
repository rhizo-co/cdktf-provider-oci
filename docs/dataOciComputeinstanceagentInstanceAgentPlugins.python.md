# `dataOciComputeinstanceagentInstanceAgentPlugins` Submodule <a name="`dataOciComputeinstanceagentInstanceAgentPlugins` Submodule" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciComputeinstanceagentInstanceAgentPlugins <a name="DataOciComputeinstanceagentInstanceAgentPlugins" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins oci_computeinstanceagent_instance_agent_plugins}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_computeinstanceagent_instance_agent_plugins

dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins(
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
  instanceagent_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciComputeinstanceagentInstanceAgentPluginsFilter]] = None,
  id: str = None,
  name: str = None,
  status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#compartment_id DataOciComputeinstanceagentInstanceAgentPlugins#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.instanceagentId">instanceagent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#instanceagent_id DataOciComputeinstanceagentInstanceAgentPlugins#instanceagent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter">DataOciComputeinstanceagentInstanceAgentPluginsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#id DataOciComputeinstanceagentInstanceAgentPlugins#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#name DataOciComputeinstanceagentInstanceAgentPlugins#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#status DataOciComputeinstanceagentInstanceAgentPlugins#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#compartment_id DataOciComputeinstanceagentInstanceAgentPlugins#compartment_id}.

---

##### `instanceagent_id`<sup>Required</sup> <a name="instanceagent_id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.instanceagentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#instanceagent_id DataOciComputeinstanceagentInstanceAgentPlugins#instanceagent_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter">DataOciComputeinstanceagentInstanceAgentPluginsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#filter DataOciComputeinstanceagentInstanceAgentPlugins#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#id DataOciComputeinstanceagentInstanceAgentPlugins#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#name DataOciComputeinstanceagentInstanceAgentPlugins#name}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#status DataOciComputeinstanceagentInstanceAgentPlugins#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.resetStatus">reset_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciComputeinstanceagentInstanceAgentPluginsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter">DataOciComputeinstanceagentInstanceAgentPluginsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_status` <a name="reset_status" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.resetStatus"></a>

```python
def reset_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciComputeinstanceagentInstanceAgentPlugins resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_computeinstanceagent_instance_agent_plugins

dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_computeinstanceagent_instance_agent_plugins

dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_computeinstanceagent_instance_agent_plugins

dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_computeinstanceagent_instance_agent_plugins

dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciComputeinstanceagentInstanceAgentPlugins resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciComputeinstanceagentInstanceAgentPlugins to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciComputeinstanceagentInstanceAgentPlugins that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciComputeinstanceagentInstanceAgentPlugins to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList">DataOciComputeinstanceagentInstanceAgentPluginsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.instanceAgentPlugins">instance_agent_plugins</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList">DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter">DataOciComputeinstanceagentInstanceAgentPluginsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.instanceagentIdInput">instanceagent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.instanceagentId">instanceagent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.filter"></a>

```python
filter: DataOciComputeinstanceagentInstanceAgentPluginsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList">DataOciComputeinstanceagentInstanceAgentPluginsFilterList</a>

---

##### `instance_agent_plugins`<sup>Required</sup> <a name="instance_agent_plugins" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.instanceAgentPlugins"></a>

```python
instance_agent_plugins: DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList">DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciComputeinstanceagentInstanceAgentPluginsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter">DataOciComputeinstanceagentInstanceAgentPluginsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `instanceagent_id_input`<sup>Optional</sup> <a name="instanceagent_id_input" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.instanceagentIdInput"></a>

```python
instanceagent_id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `instanceagent_id`<sup>Required</sup> <a name="instanceagent_id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.instanceagentId"></a>

```python
instanceagent_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPlugins.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciComputeinstanceagentInstanceAgentPluginsConfig <a name="DataOciComputeinstanceagentInstanceAgentPluginsConfig" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_computeinstanceagent_instance_agent_plugins

dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  instanceagent_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciComputeinstanceagentInstanceAgentPluginsFilter]] = None,
  id: str = None,
  name: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#compartment_id DataOciComputeinstanceagentInstanceAgentPlugins#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.instanceagentId">instanceagent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#instanceagent_id DataOciComputeinstanceagentInstanceAgentPlugins#instanceagent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter">DataOciComputeinstanceagentInstanceAgentPluginsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#id DataOciComputeinstanceagentInstanceAgentPlugins#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#name DataOciComputeinstanceagentInstanceAgentPlugins#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#status DataOciComputeinstanceagentInstanceAgentPlugins#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#compartment_id DataOciComputeinstanceagentInstanceAgentPlugins#compartment_id}.

---

##### `instanceagent_id`<sup>Required</sup> <a name="instanceagent_id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.instanceagentId"></a>

```python
instanceagent_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#instanceagent_id DataOciComputeinstanceagentInstanceAgentPlugins#instanceagent_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciComputeinstanceagentInstanceAgentPluginsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter">DataOciComputeinstanceagentInstanceAgentPluginsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#filter DataOciComputeinstanceagentInstanceAgentPlugins#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#id DataOciComputeinstanceagentInstanceAgentPlugins#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#name DataOciComputeinstanceagentInstanceAgentPlugins#name}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#status DataOciComputeinstanceagentInstanceAgentPlugins#status}.

---

### DataOciComputeinstanceagentInstanceAgentPluginsFilter <a name="DataOciComputeinstanceagentInstanceAgentPluginsFilter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_computeinstanceagent_instance_agent_plugins

dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#name DataOciComputeinstanceagentInstanceAgentPlugins#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#values DataOciComputeinstanceagentInstanceAgentPlugins#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#regex DataOciComputeinstanceagentInstanceAgentPlugins#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#name DataOciComputeinstanceagentInstanceAgentPlugins#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#values DataOciComputeinstanceagentInstanceAgentPlugins#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_agent_plugins#regex DataOciComputeinstanceagentInstanceAgentPlugins#regex}.

---

### DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPlugins <a name="DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPlugins" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPlugins"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPlugins.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_computeinstanceagent_instance_agent_plugins

dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPlugins()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciComputeinstanceagentInstanceAgentPluginsFilterList <a name="DataOciComputeinstanceagentInstanceAgentPluginsFilterList" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_computeinstanceagent_instance_agent_plugins

dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter">DataOciComputeinstanceagentInstanceAgentPluginsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciComputeinstanceagentInstanceAgentPluginsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter">DataOciComputeinstanceagentInstanceAgentPluginsFilter</a>]]

---


### DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference <a name="DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_computeinstanceagent_instance_agent_plugins

dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter">DataOciComputeinstanceagentInstanceAgentPluginsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciComputeinstanceagentInstanceAgentPluginsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsFilter">DataOciComputeinstanceagentInstanceAgentPluginsFilter</a>]

---


### DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList <a name="DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_computeinstanceagent_instance_agent_plugins

dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference <a name="DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_computeinstanceagent_instance_agent_plugins

dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.timeLastUpdatedUtc">time_last_updated_utc</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPlugins">DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPlugins</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `time_last_updated_utc`<sup>Required</sup> <a name="time_last_updated_utc" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.timeLastUpdatedUtc"></a>

```python
time_last_updated_utc: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPluginsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPlugins
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAgentPlugins.DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPlugins">DataOciComputeinstanceagentInstanceAgentPluginsInstanceAgentPlugins</a>

---



