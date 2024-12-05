# `dataOciContainerengineVirtualNodePools` Submodule <a name="`dataOciContainerengineVirtualNodePools` Submodule" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciContainerengineVirtualNodePools <a name="DataOciContainerengineVirtualNodePools" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools oci_containerengine_virtual_node_pools}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_virtual_node_pools

dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools(
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
  cluster_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciContainerengineVirtualNodePoolsFilter]] = None,
  id: str = None,
  state: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#compartment_id DataOciContainerengineVirtualNodePools#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#cluster_id DataOciContainerengineVirtualNodePools#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#display_name DataOciContainerengineVirtualNodePools#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter">DataOciContainerengineVirtualNodePoolsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#id DataOciContainerengineVirtualNodePools#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.state">state</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#state DataOciContainerengineVirtualNodePools#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#compartment_id DataOciContainerengineVirtualNodePools#compartment_id}.

---

##### `cluster_id`<sup>Optional</sup> <a name="cluster_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#cluster_id DataOciContainerengineVirtualNodePools#cluster_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#display_name DataOciContainerengineVirtualNodePools#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter">DataOciContainerengineVirtualNodePoolsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#filter DataOciContainerengineVirtualNodePools#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#id DataOciContainerengineVirtualNodePools#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.Initializer.parameter.state"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#state DataOciContainerengineVirtualNodePools#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.resetClusterId">reset_cluster_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciContainerengineVirtualNodePoolsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter">DataOciContainerengineVirtualNodePoolsFilter</a>]]

---

##### `reset_cluster_id` <a name="reset_cluster_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.resetClusterId"></a>

```python
def reset_cluster_id() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciContainerengineVirtualNodePools resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_virtual_node_pools

dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_virtual_node_pools

dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_virtual_node_pools

dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_virtual_node_pools

dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciContainerengineVirtualNodePools resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciContainerengineVirtualNodePools to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciContainerengineVirtualNodePools that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciContainerengineVirtualNodePools to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList">DataOciContainerengineVirtualNodePoolsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.virtualNodePools">virtual_node_pools</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter">DataOciContainerengineVirtualNodePoolsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.stateInput">state_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.state">state</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.filter"></a>

```python
filter: DataOciContainerengineVirtualNodePoolsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList">DataOciContainerengineVirtualNodePoolsFilterList</a>

---

##### `virtual_node_pools`<sup>Required</sup> <a name="virtual_node_pools" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.virtualNodePools"></a>

```python
virtual_node_pools: DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList</a>

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciContainerengineVirtualNodePoolsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter">DataOciContainerengineVirtualNodePoolsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.stateInput"></a>

```python
state_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.state"></a>

```python
state: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePools.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciContainerengineVirtualNodePoolsConfig <a name="DataOciContainerengineVirtualNodePoolsConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_virtual_node_pools

dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  cluster_id: str = None,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciContainerengineVirtualNodePoolsFilter]] = None,
  id: str = None,
  state: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#compartment_id DataOciContainerengineVirtualNodePools#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#cluster_id DataOciContainerengineVirtualNodePools#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#display_name DataOciContainerengineVirtualNodePools#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter">DataOciContainerengineVirtualNodePoolsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#id DataOciContainerengineVirtualNodePools#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.state">state</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#state DataOciContainerengineVirtualNodePools#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#compartment_id DataOciContainerengineVirtualNodePools#compartment_id}.

---

##### `cluster_id`<sup>Optional</sup> <a name="cluster_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#cluster_id DataOciContainerengineVirtualNodePools#cluster_id}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#display_name DataOciContainerengineVirtualNodePools#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciContainerengineVirtualNodePoolsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter">DataOciContainerengineVirtualNodePoolsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#filter DataOciContainerengineVirtualNodePools#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#id DataOciContainerengineVirtualNodePools#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsConfig.property.state"></a>

```python
state: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#state DataOciContainerengineVirtualNodePools#state}.

---

### DataOciContainerengineVirtualNodePoolsFilter <a name="DataOciContainerengineVirtualNodePoolsFilter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_virtual_node_pools

dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#name DataOciContainerengineVirtualNodePools#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#values DataOciContainerengineVirtualNodePools#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#regex DataOciContainerengineVirtualNodePools#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#name DataOciContainerengineVirtualNodePools#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#values DataOciContainerengineVirtualNodePools#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_virtual_node_pools#regex DataOciContainerengineVirtualNodePools#regex}.

---

### DataOciContainerengineVirtualNodePoolsVirtualNodePools <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePools" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePools"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePools.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_virtual_node_pools

dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePools()
```


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabels <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabels" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabels"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabels.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_virtual_node_pools

dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabels()
```


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurations <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurations" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_virtual_node_pools

dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurations()
```


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfiguration <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfiguration" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfiguration.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_virtual_node_pools

dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfiguration()
```


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaints <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaints" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaints.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_virtual_node_pools

dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaints()
```


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTags <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_virtual_node_pools

dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTags()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciContainerengineVirtualNodePoolsFilterList <a name="DataOciContainerengineVirtualNodePoolsFilterList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_virtual_node_pools

dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineVirtualNodePoolsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter">DataOciContainerengineVirtualNodePoolsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciContainerengineVirtualNodePoolsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter">DataOciContainerengineVirtualNodePoolsFilter</a>]]

---


### DataOciContainerengineVirtualNodePoolsFilterOutputReference <a name="DataOciContainerengineVirtualNodePoolsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_virtual_node_pools

dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter">DataOciContainerengineVirtualNodePoolsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciContainerengineVirtualNodePoolsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsFilter">DataOciContainerengineVirtualNodePoolsFilter</a>]

---


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_virtual_node_pools

dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_virtual_node_pools

dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabels">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabels</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabels
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabels">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabels</a>

---


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_virtual_node_pools

dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_virtual_node_pools

dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.initialVirtualNodeLabels">initial_virtual_node_labels</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.kubernetesVersion">kubernetes_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.placementConfigurations">placement_configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.podConfiguration">pod_configuration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.taints">taints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.virtualNodePoolId">virtual_node_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.virtualNodeTags">virtual_node_tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePools">DataOciContainerengineVirtualNodePoolsVirtualNodePools</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `initial_virtual_node_labels`<sup>Required</sup> <a name="initial_virtual_node_labels" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.initialVirtualNodeLabels"></a>

```python
initial_virtual_node_labels: DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsInitialVirtualNodeLabelsList</a>

---

##### `kubernetes_version`<sup>Required</sup> <a name="kubernetes_version" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.kubernetesVersion"></a>

```python
kubernetes_version: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `placement_configurations`<sup>Required</sup> <a name="placement_configurations" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.placementConfigurations"></a>

```python
placement_configurations: DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList</a>

---

##### `pod_configuration`<sup>Required</sup> <a name="pod_configuration" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.podConfiguration"></a>

```python
pod_configuration: DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList</a>

---

##### `size`<sup>Required</sup> <a name="size" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `taints`<sup>Required</sup> <a name="taints" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.taints"></a>

```python
taints: DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList</a>

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `virtual_node_pool_id`<sup>Required</sup> <a name="virtual_node_pool_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.virtualNodePoolId"></a>

```python
virtual_node_pool_id: str
```

- *Type:* str

---

##### `virtual_node_tags`<sup>Required</sup> <a name="virtual_node_tags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.virtualNodeTags"></a>

```python
virtual_node_tags: DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerengineVirtualNodePoolsVirtualNodePools
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePools">DataOciContainerengineVirtualNodePoolsVirtualNodePools</a>

---


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_virtual_node_pools

dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_virtual_node_pools

dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.property.faultDomain">fault_domain</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurations">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `fault_domain`<sup>Required</sup> <a name="fault_domain" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.property.faultDomain"></a>

```python
fault_domain: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurations">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPlacementConfigurations</a>

---


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_virtual_node_pools

dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_virtual_node_pools

dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfiguration">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfiguration</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfigurationOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfiguration">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsPodConfiguration</a>

---


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_virtual_node_pools

dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_virtual_node_pools

dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.property.effect">effect</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaints">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `effect`<sup>Required</sup> <a name="effect" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.property.effect"></a>

```python
effect: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaintsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaints
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaints">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsTaints</a>

---


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_virtual_node_pools

dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference <a name="DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_virtual_node_pools

dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTags">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTagsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineVirtualNodePools.DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTags">DataOciContainerengineVirtualNodePoolsVirtualNodePoolsVirtualNodeTags</a>

---



