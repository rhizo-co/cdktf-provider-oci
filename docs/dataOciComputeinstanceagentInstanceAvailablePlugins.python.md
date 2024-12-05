# `dataOciComputeinstanceagentInstanceAvailablePlugins` Submodule <a name="`dataOciComputeinstanceagentInstanceAvailablePlugins` Submodule" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciComputeinstanceagentInstanceAvailablePlugins <a name="DataOciComputeinstanceagentInstanceAvailablePlugins" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins oci_computeinstanceagent_instance_available_plugins}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_computeinstanceagent_instance_available_plugins

dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins(
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
  os_name: str,
  os_version: str,
  filter: typing.Union[IResolvable, typing.List[DataOciComputeinstanceagentInstanceAvailablePluginsFilter]] = None,
  id: str = None,
  name: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#compartment_id DataOciComputeinstanceagentInstanceAvailablePlugins#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.osName">os_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#os_name DataOciComputeinstanceagentInstanceAvailablePlugins#os_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.osVersion">os_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#os_version DataOciComputeinstanceagentInstanceAvailablePlugins#os_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter">DataOciComputeinstanceagentInstanceAvailablePluginsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#id DataOciComputeinstanceagentInstanceAvailablePlugins#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#name DataOciComputeinstanceagentInstanceAvailablePlugins#name}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#compartment_id DataOciComputeinstanceagentInstanceAvailablePlugins#compartment_id}.

---

##### `os_name`<sup>Required</sup> <a name="os_name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.osName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#os_name DataOciComputeinstanceagentInstanceAvailablePlugins#os_name}.

---

##### `os_version`<sup>Required</sup> <a name="os_version" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.osVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#os_version DataOciComputeinstanceagentInstanceAvailablePlugins#os_version}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter">DataOciComputeinstanceagentInstanceAvailablePluginsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#filter DataOciComputeinstanceagentInstanceAvailablePlugins#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#id DataOciComputeinstanceagentInstanceAvailablePlugins#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#name DataOciComputeinstanceagentInstanceAvailablePlugins#name}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.resetName">reset_name</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciComputeinstanceagentInstanceAvailablePluginsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter">DataOciComputeinstanceagentInstanceAvailablePluginsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.resetName"></a>

```python
def reset_name() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciComputeinstanceagentInstanceAvailablePlugins resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_computeinstanceagent_instance_available_plugins

dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_computeinstanceagent_instance_available_plugins

dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_computeinstanceagent_instance_available_plugins

dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_computeinstanceagent_instance_available_plugins

dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciComputeinstanceagentInstanceAvailablePlugins resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciComputeinstanceagentInstanceAvailablePlugins to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciComputeinstanceagentInstanceAvailablePlugins that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciComputeinstanceagentInstanceAvailablePlugins to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.availablePlugins">available_plugins</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList">DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList">DataOciComputeinstanceagentInstanceAvailablePluginsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter">DataOciComputeinstanceagentInstanceAvailablePluginsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.osNameInput">os_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.osVersionInput">os_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.osName">os_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.osVersion">os_version</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `available_plugins`<sup>Required</sup> <a name="available_plugins" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.availablePlugins"></a>

```python
available_plugins: DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList">DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.filter"></a>

```python
filter: DataOciComputeinstanceagentInstanceAvailablePluginsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList">DataOciComputeinstanceagentInstanceAvailablePluginsFilterList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciComputeinstanceagentInstanceAvailablePluginsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter">DataOciComputeinstanceagentInstanceAvailablePluginsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `os_name_input`<sup>Optional</sup> <a name="os_name_input" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.osNameInput"></a>

```python
os_name_input: str
```

- *Type:* str

---

##### `os_version_input`<sup>Optional</sup> <a name="os_version_input" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.osVersionInput"></a>

```python
os_version_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `os_name`<sup>Required</sup> <a name="os_name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.osName"></a>

```python
os_name: str
```

- *Type:* str

---

##### `os_version`<sup>Required</sup> <a name="os_version" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.osVersion"></a>

```python
os_version: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePlugins.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins <a name="DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_computeinstanceagent_instance_available_plugins

dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins()
```


### DataOciComputeinstanceagentInstanceAvailablePluginsConfig <a name="DataOciComputeinstanceagentInstanceAvailablePluginsConfig" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_computeinstanceagent_instance_available_plugins

dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  os_name: str,
  os_version: str,
  filter: typing.Union[IResolvable, typing.List[DataOciComputeinstanceagentInstanceAvailablePluginsFilter]] = None,
  id: str = None,
  name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#compartment_id DataOciComputeinstanceagentInstanceAvailablePlugins#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.osName">os_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#os_name DataOciComputeinstanceagentInstanceAvailablePlugins#os_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.osVersion">os_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#os_version DataOciComputeinstanceagentInstanceAvailablePlugins#os_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter">DataOciComputeinstanceagentInstanceAvailablePluginsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#id DataOciComputeinstanceagentInstanceAvailablePlugins#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#name DataOciComputeinstanceagentInstanceAvailablePlugins#name}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#compartment_id DataOciComputeinstanceagentInstanceAvailablePlugins#compartment_id}.

---

##### `os_name`<sup>Required</sup> <a name="os_name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.osName"></a>

```python
os_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#os_name DataOciComputeinstanceagentInstanceAvailablePlugins#os_name}.

---

##### `os_version`<sup>Required</sup> <a name="os_version" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.osVersion"></a>

```python
os_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#os_version DataOciComputeinstanceagentInstanceAvailablePlugins#os_version}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciComputeinstanceagentInstanceAvailablePluginsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter">DataOciComputeinstanceagentInstanceAvailablePluginsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#filter DataOciComputeinstanceagentInstanceAvailablePlugins#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#id DataOciComputeinstanceagentInstanceAvailablePlugins#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#name DataOciComputeinstanceagentInstanceAvailablePlugins#name}.

---

### DataOciComputeinstanceagentInstanceAvailablePluginsFilter <a name="DataOciComputeinstanceagentInstanceAvailablePluginsFilter" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_computeinstanceagent_instance_available_plugins

dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#name DataOciComputeinstanceagentInstanceAvailablePlugins#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#values DataOciComputeinstanceagentInstanceAvailablePlugins#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#regex DataOciComputeinstanceagentInstanceAvailablePlugins#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#name DataOciComputeinstanceagentInstanceAvailablePlugins#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#values DataOciComputeinstanceagentInstanceAvailablePlugins#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/computeinstanceagent_instance_available_plugins#regex DataOciComputeinstanceagentInstanceAvailablePlugins#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList <a name="DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_computeinstanceagent_instance_available_plugins

dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference <a name="DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_computeinstanceagent_instance_available_plugins

dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.isEnabledByDefault">is_enabled_by_default</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.isSupported">is_supported</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.summary">summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins">DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_enabled_by_default`<sup>Required</sup> <a name="is_enabled_by_default" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.isEnabledByDefault"></a>

```python
is_enabled_by_default: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_supported`<sup>Required</sup> <a name="is_supported" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.isSupported"></a>

```python
is_supported: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `summary`<sup>Required</sup> <a name="summary" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.summary"></a>

```python
summary: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePluginsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins">DataOciComputeinstanceagentInstanceAvailablePluginsAvailablePlugins</a>

---


### DataOciComputeinstanceagentInstanceAvailablePluginsFilterList <a name="DataOciComputeinstanceagentInstanceAvailablePluginsFilterList" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_computeinstanceagent_instance_available_plugins

dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter">DataOciComputeinstanceagentInstanceAvailablePluginsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciComputeinstanceagentInstanceAvailablePluginsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter">DataOciComputeinstanceagentInstanceAvailablePluginsFilter</a>]]

---


### DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference <a name="DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_computeinstanceagent_instance_available_plugins

dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter">DataOciComputeinstanceagentInstanceAvailablePluginsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciComputeinstanceagentInstanceAvailablePluginsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciComputeinstanceagentInstanceAvailablePlugins.DataOciComputeinstanceagentInstanceAvailablePluginsFilter">DataOciComputeinstanceagentInstanceAvailablePluginsFilter</a>]

---



