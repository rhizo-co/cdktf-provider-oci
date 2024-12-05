# `dataOciContainerengineNodePools` Submodule <a name="`dataOciContainerengineNodePools` Submodule" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciContainerengineNodePools <a name="DataOciContainerengineNodePools" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools oci_containerengine_node_pools}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePools(
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
  filter: typing.Union[IResolvable, typing.List[DataOciContainerengineNodePoolsFilter]] = None,
  id: str = None,
  name: str = None,
  state: typing.List[str] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#compartment_id DataOciContainerengineNodePools#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#cluster_id DataOciContainerengineNodePools#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter">DataOciContainerengineNodePoolsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#id DataOciContainerengineNodePools#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#name DataOciContainerengineNodePools#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.state">state</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#state DataOciContainerengineNodePools#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#compartment_id DataOciContainerengineNodePools#compartment_id}.

---

##### `cluster_id`<sup>Optional</sup> <a name="cluster_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.clusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#cluster_id DataOciContainerengineNodePools#cluster_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter">DataOciContainerengineNodePoolsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#filter DataOciContainerengineNodePools#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#id DataOciContainerengineNodePools#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#name DataOciContainerengineNodePools#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.Initializer.parameter.state"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#state DataOciContainerengineNodePools#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.resetClusterId">reset_cluster_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciContainerengineNodePoolsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter">DataOciContainerengineNodePoolsFilter</a>]]

---

##### `reset_cluster_id` <a name="reset_cluster_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.resetClusterId"></a>

```python
def reset_cluster_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciContainerengineNodePools resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePools.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePools.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePools.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePools.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciContainerengineNodePools resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciContainerengineNodePools to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciContainerengineNodePools that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciContainerengineNodePools to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList">DataOciContainerengineNodePoolsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.nodePools">node_pools</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList">DataOciContainerengineNodePoolsNodePoolsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.clusterIdInput">cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter">DataOciContainerengineNodePoolsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.stateInput">state_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.state">state</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.filter"></a>

```python
filter: DataOciContainerengineNodePoolsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList">DataOciContainerengineNodePoolsFilterList</a>

---

##### `node_pools`<sup>Required</sup> <a name="node_pools" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.nodePools"></a>

```python
node_pools: DataOciContainerengineNodePoolsNodePoolsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList">DataOciContainerengineNodePoolsNodePoolsList</a>

---

##### `cluster_id_input`<sup>Optional</sup> <a name="cluster_id_input" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.clusterIdInput"></a>

```python
cluster_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciContainerengineNodePoolsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter">DataOciContainerengineNodePoolsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.stateInput"></a>

```python
state_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.state"></a>

```python
state: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePools.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciContainerengineNodePoolsConfig <a name="DataOciContainerengineNodePoolsConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  cluster_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciContainerengineNodePoolsFilter]] = None,
  id: str = None,
  name: str = None,
  state: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#compartment_id DataOciContainerengineNodePools#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.clusterId">cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#cluster_id DataOciContainerengineNodePools#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter">DataOciContainerengineNodePoolsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#id DataOciContainerengineNodePools#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#name DataOciContainerengineNodePools#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.state">state</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#state DataOciContainerengineNodePools#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#compartment_id DataOciContainerengineNodePools#compartment_id}.

---

##### `cluster_id`<sup>Optional</sup> <a name="cluster_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#cluster_id DataOciContainerengineNodePools#cluster_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciContainerengineNodePoolsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter">DataOciContainerengineNodePoolsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#filter DataOciContainerengineNodePools#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#id DataOciContainerengineNodePools#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#name DataOciContainerengineNodePools#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsConfig.property.state"></a>

```python
state: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#state DataOciContainerengineNodePools#state}.

---

### DataOciContainerengineNodePoolsFilter <a name="DataOciContainerengineNodePoolsFilter" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#name DataOciContainerengineNodePools#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#values DataOciContainerengineNodePools#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#regex DataOciContainerengineNodePools#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#name DataOciContainerengineNodePools#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#values DataOciContainerengineNodePools#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/containerengine_node_pools#regex DataOciContainerengineNodePools#regex}.

---

### DataOciContainerengineNodePoolsNodePools <a name="DataOciContainerengineNodePoolsNodePools" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePools"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePools.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePools()
```


### DataOciContainerengineNodePoolsNodePoolsInitialNodeLabels <a name="DataOciContainerengineNodePoolsNodePoolsInitialNodeLabels" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabels"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabels.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabels()
```


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetails <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetails()
```


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetails <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetails()
```


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigs <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigs" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigs.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigs()
```


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig()
```


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction()
```


### DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettings <a name="DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettings" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettings()
```


### DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetails <a name="DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetails()
```


### DataOciContainerengineNodePoolsNodePoolsNodes <a name="DataOciContainerengineNodePoolsNodePoolsNodes" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodes()
```


### DataOciContainerengineNodePoolsNodePoolsNodesError <a name="DataOciContainerengineNodePoolsNodePoolsNodesError" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesError"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesError.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesError()
```


### DataOciContainerengineNodePoolsNodePoolsNodeShapeConfig <a name="DataOciContainerengineNodePoolsNodePoolsNodeShapeConfig" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfig()
```


### DataOciContainerengineNodePoolsNodePoolsNodeSource <a name="DataOciContainerengineNodePoolsNodePoolsNodeSource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSource.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSource()
```


### DataOciContainerengineNodePoolsNodePoolsNodeSourceDetails <a name="DataOciContainerengineNodePoolsNodePoolsNodeSourceDetails" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciContainerengineNodePoolsFilterList <a name="DataOciContainerengineNodePoolsFilterList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineNodePoolsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter">DataOciContainerengineNodePoolsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciContainerengineNodePoolsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter">DataOciContainerengineNodePoolsFilter</a>]]

---


### DataOciContainerengineNodePoolsFilterOutputReference <a name="DataOciContainerengineNodePoolsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter">DataOciContainerengineNodePoolsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciContainerengineNodePoolsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsFilter">DataOciContainerengineNodePoolsFilter</a>]

---


### DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList <a name="DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabels">DataOciContainerengineNodePoolsNodePoolsInitialNodeLabels</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerengineNodePoolsNodePoolsInitialNodeLabels
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabels">DataOciContainerengineNodePoolsNodePoolsInitialNodeLabels</a>

---


### DataOciContainerengineNodePoolsNodePoolsList <a name="DataOciContainerengineNodePoolsNodePoolsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineNodePoolsNodePoolsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.cniType">cni_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.maxPodsPerNode">max_pods_per_node</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.podNsgIds">pod_nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.podSubnetIds">pod_subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetails">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cni_type`<sup>Required</sup> <a name="cni_type" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.cniType"></a>

```python
cni_type: str
```

- *Type:* str

---

##### `max_pods_per_node`<sup>Required</sup> <a name="max_pods_per_node" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.maxPodsPerNode"></a>

```python
max_pods_per_node: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `pod_nsg_ids`<sup>Required</sup> <a name="pod_nsg_ids" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.podNsgIds"></a>

```python
pod_nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `pod_subnet_ids`<sup>Required</sup> <a name="pod_subnet_ids" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.podSubnetIds"></a>

```python
pod_subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetails">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetails</a>

---


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.isPvEncryptionInTransitEnabled">is_pv_encryption_in_transit_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.nodePoolPodNetworkOptionDetails">node_pool_pod_network_option_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.placementConfigs">placement_configs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.size">size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetails">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `is_pv_encryption_in_transit_enabled`<sup>Required</sup> <a name="is_pv_encryption_in_transit_enabled" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.isPvEncryptionInTransitEnabled"></a>

```python
is_pv_encryption_in_transit_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `node_pool_pod_network_option_details`<sup>Required</sup> <a name="node_pool_pod_network_option_details" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.nodePoolPodNetworkOptionDetails"></a>

```python
node_pool_pod_network_option_details: DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsNodePoolPodNetworkOptionDetailsList</a>

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `placement_configs`<sup>Required</sup> <a name="placement_configs" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.placementConfigs"></a>

```python
placement_configs: DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList</a>

---

##### `size`<sup>Required</sup> <a name="size" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.size"></a>

```python
size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerengineNodePoolsNodePoolsNodeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetails">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetails</a>

---


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.capacityReservationId">capacity_reservation_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.faultDomains">fault_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.preemptibleNodeConfig">preemptible_node_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigs">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigs</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `capacity_reservation_id`<sup>Required</sup> <a name="capacity_reservation_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.capacityReservationId"></a>

```python
capacity_reservation_id: str
```

- *Type:* str

---

##### `fault_domains`<sup>Required</sup> <a name="fault_domains" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.faultDomains"></a>

```python
fault_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `preemptible_node_config`<sup>Required</sup> <a name="preemptible_node_config" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.preemptibleNodeConfig"></a>

```python
preemptible_node_config: DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList</a>

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigs
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigs">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigs</a>

---


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.preemptionAction">preemption_action</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `preemption_action`<sup>Required</sup> <a name="preemption_action" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.preemptionAction"></a>

```python
preemption_action: DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig</a>

---


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.isPreserveBootVolume">is_preserve_boot_volume</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_preserve_boot_volume`<sup>Required</sup> <a name="is_preserve_boot_volume" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.isPreserveBootVolume"></a>

```python
is_preserve_boot_volume: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction</a>

---


### DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList <a name="DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.property.evictionGraceDuration">eviction_grace_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.property.isForceDeleteAfterGraceDuration">is_force_delete_after_grace_duration</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettings">DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `eviction_grace_duration`<sup>Required</sup> <a name="eviction_grace_duration" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.property.evictionGraceDuration"></a>

```python
eviction_grace_duration: str
```

- *Type:* str

---

##### `is_force_delete_after_grace_duration`<sup>Required</sup> <a name="is_force_delete_after_grace_duration" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.property.isForceDeleteAfterGraceDuration"></a>

```python
is_force_delete_after_grace_duration: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettings">DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettings</a>

---


### DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList <a name="DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.property.isNodeCyclingEnabled">is_node_cycling_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.property.maximumSurge">maximum_surge</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.property.maximumUnavailable">maximum_unavailable</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetails">DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_node_cycling_enabled`<sup>Required</sup> <a name="is_node_cycling_enabled" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.property.isNodeCyclingEnabled"></a>

```python
is_node_cycling_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `maximum_surge`<sup>Required</sup> <a name="maximum_surge" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.property.maximumSurge"></a>

```python
maximum_surge: str
```

- *Type:* str

---

##### `maximum_unavailable`<sup>Required</sup> <a name="maximum_unavailable" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.property.maximumUnavailable"></a>

```python
maximum_unavailable: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetails">DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetails</a>

---


### DataOciContainerengineNodePoolsNodePoolsNodesErrorList <a name="DataOciContainerengineNodePoolsNodePoolsNodesErrorList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesError">DataOciContainerengineNodePoolsNodePoolsNodesError</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerengineNodePoolsNodePoolsNodesError
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesError">DataOciContainerengineNodePoolsNodePoolsNodesError</a>

---


### DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList <a name="DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.property.memoryInGbs">memory_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.property.ocpus">ocpus</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfig">DataOciContainerengineNodePoolsNodePoolsNodeShapeConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `memory_in_gbs`<sup>Required</sup> <a name="memory_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.property.memoryInGbs"></a>

```python
memory_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ocpus`<sup>Required</sup> <a name="ocpus" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.property.ocpus"></a>

```python
ocpus: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerengineNodePoolsNodePoolsNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfig">DataOciContainerengineNodePoolsNodePoolsNodeShapeConfig</a>

---


### DataOciContainerengineNodePoolsNodePoolsNodesList <a name="DataOciContainerengineNodePoolsNodePoolsNodesList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineNodePoolsNodePoolsNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList <a name="DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.property.bootVolumeSizeInGbs">boot_volume_size_in_gbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetails">DataOciContainerengineNodePoolsNodePoolsNodeSourceDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `boot_volume_size_in_gbs`<sup>Required</sup> <a name="boot_volume_size_in_gbs" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.property.bootVolumeSizeInGbs"></a>

```python
boot_volume_size_in_gbs: str
```

- *Type:* str

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerengineNodePoolsNodePoolsNodeSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetails">DataOciContainerengineNodePoolsNodePoolsNodeSourceDetails</a>

---


### DataOciContainerengineNodePoolsNodePoolsNodeSourceList <a name="DataOciContainerengineNodePoolsNodePoolsNodeSourceList" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.property.imageId">image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.property.sourceName">source_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSource">DataOciContainerengineNodePoolsNodePoolsNodeSource</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `image_id`<sup>Required</sup> <a name="image_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.property.imageId"></a>

```python
image_id: str
```

- *Type:* str

---

##### `source_name`<sup>Required</sup> <a name="source_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.property.sourceName"></a>

```python
source_name: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerengineNodePoolsNodePoolsNodeSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSource">DataOciContainerengineNodePoolsNodePoolsNodeSource</a>

---


### DataOciContainerengineNodePoolsNodePoolsNodesOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsNodesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.error">error</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList">DataOciContainerengineNodePoolsNodePoolsNodesErrorList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.faultDomain">fault_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.kubernetesVersion">kubernetes_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.nodePoolId">node_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.publicIp">public_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodes">DataOciContainerengineNodePoolsNodePoolsNodes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `error`<sup>Required</sup> <a name="error" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.error"></a>

```python
error: DataOciContainerengineNodePoolsNodePoolsNodesErrorList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesErrorList">DataOciContainerengineNodePoolsNodePoolsNodesErrorList</a>

---

##### `fault_domain`<sup>Required</sup> <a name="fault_domain" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.faultDomain"></a>

```python
fault_domain: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kubernetes_version`<sup>Required</sup> <a name="kubernetes_version" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.kubernetesVersion"></a>

```python
kubernetes_version: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_pool_id`<sup>Required</sup> <a name="node_pool_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.nodePoolId"></a>

```python
node_pool_id: str
```

- *Type:* str

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `public_ip`<sup>Required</sup> <a name="public_ip" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.publicIp"></a>

```python
public_ip: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerengineNodePoolsNodePoolsNodes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodes">DataOciContainerengineNodePoolsNodePoolsNodes</a>

---


### DataOciContainerengineNodePoolsNodePoolsOutputReference <a name="DataOciContainerengineNodePoolsNodePoolsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_containerengine_node_pools

dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.clusterId">cluster_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.initialNodeLabels">initial_node_labels</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList">DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.kubernetesVersion">kubernetes_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeConfigDetails">node_config_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeEvictionNodePoolSettings">node_eviction_node_pool_settings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList">DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeImageId">node_image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeImageName">node_image_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeMetadata">node_metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodePoolCyclingDetails">node_pool_cycling_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList">DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodePoolId">node_pool_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodes">nodes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList">DataOciContainerengineNodePoolsNodePoolsNodesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeShape">node_shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeShapeConfig">node_shape_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList">DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeSource">node_source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList">DataOciContainerengineNodePoolsNodePoolsNodeSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeSourceDetails">node_source_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList">DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.quantityPerSubnet">quantity_per_subnet</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.sshPublicKey">ssh_public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.subnetIds">subnet_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePools">DataOciContainerengineNodePoolsNodePools</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cluster_id`<sup>Required</sup> <a name="cluster_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.clusterId"></a>

```python
cluster_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `initial_node_labels`<sup>Required</sup> <a name="initial_node_labels" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.initialNodeLabels"></a>

```python
initial_node_labels: DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList">DataOciContainerengineNodePoolsNodePoolsInitialNodeLabelsList</a>

---

##### `kubernetes_version`<sup>Required</sup> <a name="kubernetes_version" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.kubernetesVersion"></a>

```python
kubernetes_version: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `node_config_details`<sup>Required</sup> <a name="node_config_details" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeConfigDetails"></a>

```python
node_config_details: DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList">DataOciContainerengineNodePoolsNodePoolsNodeConfigDetailsList</a>

---

##### `node_eviction_node_pool_settings`<sup>Required</sup> <a name="node_eviction_node_pool_settings" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeEvictionNodePoolSettings"></a>

```python
node_eviction_node_pool_settings: DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList">DataOciContainerengineNodePoolsNodePoolsNodeEvictionNodePoolSettingsList</a>

---

##### `node_image_id`<sup>Required</sup> <a name="node_image_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeImageId"></a>

```python
node_image_id: str
```

- *Type:* str

---

##### `node_image_name`<sup>Required</sup> <a name="node_image_name" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeImageName"></a>

```python
node_image_name: str
```

- *Type:* str

---

##### `node_metadata`<sup>Required</sup> <a name="node_metadata" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeMetadata"></a>

```python
node_metadata: StringMap
```

- *Type:* cdktf.StringMap

---

##### `node_pool_cycling_details`<sup>Required</sup> <a name="node_pool_cycling_details" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodePoolCyclingDetails"></a>

```python
node_pool_cycling_details: DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList">DataOciContainerengineNodePoolsNodePoolsNodePoolCyclingDetailsList</a>

---

##### `node_pool_id`<sup>Required</sup> <a name="node_pool_id" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodePoolId"></a>

```python
node_pool_id: str
```

- *Type:* str

---

##### `nodes`<sup>Required</sup> <a name="nodes" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodes"></a>

```python
nodes: DataOciContainerengineNodePoolsNodePoolsNodesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodesList">DataOciContainerengineNodePoolsNodePoolsNodesList</a>

---

##### `node_shape`<sup>Required</sup> <a name="node_shape" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeShape"></a>

```python
node_shape: str
```

- *Type:* str

---

##### `node_shape_config`<sup>Required</sup> <a name="node_shape_config" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeShapeConfig"></a>

```python
node_shape_config: DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList">DataOciContainerengineNodePoolsNodePoolsNodeShapeConfigList</a>

---

##### `node_source`<sup>Required</sup> <a name="node_source" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeSource"></a>

```python
node_source: DataOciContainerengineNodePoolsNodePoolsNodeSourceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceList">DataOciContainerengineNodePoolsNodePoolsNodeSourceList</a>

---

##### `node_source_details`<sup>Required</sup> <a name="node_source_details" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.nodeSourceDetails"></a>

```python
node_source_details: DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList">DataOciContainerengineNodePoolsNodePoolsNodeSourceDetailsList</a>

---

##### `quantity_per_subnet`<sup>Required</sup> <a name="quantity_per_subnet" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.quantityPerSubnet"></a>

```python
quantity_per_subnet: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `ssh_public_key`<sup>Required</sup> <a name="ssh_public_key" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.sshPublicKey"></a>

```python
ssh_public_key: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_ids`<sup>Required</sup> <a name="subnet_ids" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.subnetIds"></a>

```python
subnet_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePoolsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciContainerengineNodePoolsNodePools
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciContainerengineNodePools.DataOciContainerengineNodePoolsNodePools">DataOciContainerengineNodePoolsNodePools</a>

---



