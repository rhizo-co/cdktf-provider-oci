# `dataOciAnalyticsAnalyticsInstances` Submodule <a name="`dataOciAnalyticsAnalyticsInstances` Submodule" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciAnalyticsAnalyticsInstances <a name="DataOciAnalyticsAnalyticsInstances" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances oci_analytics_analytics_instances}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_analytics_analytics_instances

dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances(
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
  capacity_type: str = None,
  feature_set: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciAnalyticsAnalyticsInstancesFilter]] = None,
  id: str = None,
  name: str = None,
  state: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#compartment_id DataOciAnalyticsAnalyticsInstances#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.capacityType">capacity_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#capacity_type DataOciAnalyticsAnalyticsInstances#capacity_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.featureSet">feature_set</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#feature_set DataOciAnalyticsAnalyticsInstances#feature_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter">DataOciAnalyticsAnalyticsInstancesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#id DataOciAnalyticsAnalyticsInstances#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#name DataOciAnalyticsAnalyticsInstances#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#state DataOciAnalyticsAnalyticsInstances#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#compartment_id DataOciAnalyticsAnalyticsInstances#compartment_id}.

---

##### `capacity_type`<sup>Optional</sup> <a name="capacity_type" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.capacityType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#capacity_type DataOciAnalyticsAnalyticsInstances#capacity_type}.

---

##### `feature_set`<sup>Optional</sup> <a name="feature_set" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.featureSet"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#feature_set DataOciAnalyticsAnalyticsInstances#feature_set}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter">DataOciAnalyticsAnalyticsInstancesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#filter DataOciAnalyticsAnalyticsInstances#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#id DataOciAnalyticsAnalyticsInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#name DataOciAnalyticsAnalyticsInstances#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#state DataOciAnalyticsAnalyticsInstances#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetCapacityType">reset_capacity_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetFeatureSet">reset_feature_set</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetState">reset_state</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciAnalyticsAnalyticsInstancesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter">DataOciAnalyticsAnalyticsInstancesFilter</a>]]

---

##### `reset_capacity_type` <a name="reset_capacity_type" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetCapacityType"></a>

```python
def reset_capacity_type() -> None
```

##### `reset_feature_set` <a name="reset_feature_set" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetFeatureSet"></a>

```python
def reset_feature_set() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.resetState"></a>

```python
def reset_state() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciAnalyticsAnalyticsInstances resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_analytics_analytics_instances

dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_analytics_analytics_instances

dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_analytics_analytics_instances

dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_analytics_analytics_instances

dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciAnalyticsAnalyticsInstances resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciAnalyticsAnalyticsInstances to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciAnalyticsAnalyticsInstances that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciAnalyticsAnalyticsInstances to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.analyticsInstances">analytics_instances</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList">DataOciAnalyticsAnalyticsInstancesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.capacityTypeInput">capacity_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.featureSetInput">feature_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter">DataOciAnalyticsAnalyticsInstancesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.capacityType">capacity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.featureSet">feature_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.state">state</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `analytics_instances`<sup>Required</sup> <a name="analytics_instances" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.analyticsInstances"></a>

```python
analytics_instances: DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.filter"></a>

```python
filter: DataOciAnalyticsAnalyticsInstancesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList">DataOciAnalyticsAnalyticsInstancesFilterList</a>

---

##### `capacity_type_input`<sup>Optional</sup> <a name="capacity_type_input" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.capacityTypeInput"></a>

```python
capacity_type_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `feature_set_input`<sup>Optional</sup> <a name="feature_set_input" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.featureSetInput"></a>

```python
feature_set_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciAnalyticsAnalyticsInstancesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter">DataOciAnalyticsAnalyticsInstancesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `capacity_type`<sup>Required</sup> <a name="capacity_type" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.capacityType"></a>

```python
capacity_type: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `feature_set`<sup>Required</sup> <a name="feature_set" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.featureSet"></a>

```python
feature_set: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.state"></a>

```python
state: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstances.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciAnalyticsAnalyticsInstancesAnalyticsInstances <a name="DataOciAnalyticsAnalyticsInstancesAnalyticsInstances" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstances"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstances.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_analytics_analytics_instances

dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstances()
```


### DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacity <a name="DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacity" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacity"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacity.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_analytics_analytics_instances

dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacity()
```


### DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetails <a name="DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetails" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_analytics_analytics_instances

dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetails()
```


### DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcns <a name="DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcns" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcns"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcns.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_analytics_analytics_instances

dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcns()
```


### DataOciAnalyticsAnalyticsInstancesConfig <a name="DataOciAnalyticsAnalyticsInstancesConfig" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_analytics_analytics_instances

dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  capacity_type: str = None,
  feature_set: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciAnalyticsAnalyticsInstancesFilter]] = None,
  id: str = None,
  name: str = None,
  state: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#compartment_id DataOciAnalyticsAnalyticsInstances#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.capacityType">capacity_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#capacity_type DataOciAnalyticsAnalyticsInstances#capacity_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.featureSet">feature_set</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#feature_set DataOciAnalyticsAnalyticsInstances#feature_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter">DataOciAnalyticsAnalyticsInstancesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#id DataOciAnalyticsAnalyticsInstances#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#name DataOciAnalyticsAnalyticsInstances#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#state DataOciAnalyticsAnalyticsInstances#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#compartment_id DataOciAnalyticsAnalyticsInstances#compartment_id}.

---

##### `capacity_type`<sup>Optional</sup> <a name="capacity_type" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.capacityType"></a>

```python
capacity_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#capacity_type DataOciAnalyticsAnalyticsInstances#capacity_type}.

---

##### `feature_set`<sup>Optional</sup> <a name="feature_set" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.featureSet"></a>

```python
feature_set: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#feature_set DataOciAnalyticsAnalyticsInstances#feature_set}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciAnalyticsAnalyticsInstancesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter">DataOciAnalyticsAnalyticsInstancesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#filter DataOciAnalyticsAnalyticsInstances#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#id DataOciAnalyticsAnalyticsInstances#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#name DataOciAnalyticsAnalyticsInstances#name}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#state DataOciAnalyticsAnalyticsInstances#state}.

---

### DataOciAnalyticsAnalyticsInstancesFilter <a name="DataOciAnalyticsAnalyticsInstancesFilter" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_analytics_analytics_instances

dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#name DataOciAnalyticsAnalyticsInstances#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#values DataOciAnalyticsAnalyticsInstances#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#regex DataOciAnalyticsAnalyticsInstances#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#name DataOciAnalyticsAnalyticsInstances#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#values DataOciAnalyticsAnalyticsInstances#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/analytics_analytics_instances#regex DataOciAnalyticsAnalyticsInstances#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList <a name="DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_analytics_analytics_instances

dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference <a name="DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_analytics_analytics_instances

dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.property.capacityType">capacity_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.property.capacityValue">capacity_value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacity">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `capacity_type`<sup>Required</sup> <a name="capacity_type" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.property.capacityType"></a>

```python
capacity_type: str
```

- *Type:* str

---

##### `capacity_value`<sup>Required</sup> <a name="capacity_value" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.property.capacityValue"></a>

```python
capacity_value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacity
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacity">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacity</a>

---


### DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList <a name="DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_analytics_analytics_instances

dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList <a name="DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_analytics_analytics_instances

dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference <a name="DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_analytics_analytics_instances

dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.networkEndpointType">network_endpoint_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.networkSecurityGroupIds">network_security_group_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.vcnId">vcn_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.whitelistedIps">whitelisted_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.whitelistedServices">whitelisted_services</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.whitelistedVcns">whitelisted_vcns</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetails">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `network_endpoint_type`<sup>Required</sup> <a name="network_endpoint_type" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.networkEndpointType"></a>

```python
network_endpoint_type: str
```

- *Type:* str

---

##### `network_security_group_ids`<sup>Required</sup> <a name="network_security_group_ids" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.networkSecurityGroupIds"></a>

```python
network_security_group_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

---

##### `whitelisted_ips`<sup>Required</sup> <a name="whitelisted_ips" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.whitelistedIps"></a>

```python
whitelisted_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `whitelisted_services`<sup>Required</sup> <a name="whitelisted_services" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.whitelistedServices"></a>

```python
whitelisted_services: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `whitelisted_vcns`<sup>Required</sup> <a name="whitelisted_vcns" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.whitelistedVcns"></a>

```python
whitelisted_vcns: DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetails">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetails</a>

---


### DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList <a name="DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_analytics_analytics_instances

dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference <a name="DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_analytics_analytics_instances

dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.whitelistedIps">whitelisted_ips</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcns">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `whitelisted_ips`<sup>Required</sup> <a name="whitelisted_ips" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.whitelistedIps"></a>

```python
whitelisted_ips: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcnsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcns
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcns">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsWhitelistedVcns</a>

---


### DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference <a name="DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_analytics_analytics_instances

dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.adminUser">admin_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.capacity">capacity</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.domainId">domain_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.emailNotification">email_notification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.featureBundle">feature_bundle</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.featureSet">feature_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.idcsAccessToken">idcs_access_token</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.licenseType">license_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.networkEndpointDetails">network_endpoint_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.serviceUrl">service_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.updateChannel">update_channel</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstances">DataOciAnalyticsAnalyticsInstancesAnalyticsInstances</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_user`<sup>Required</sup> <a name="admin_user" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.adminUser"></a>

```python
admin_user: str
```

- *Type:* str

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.capacity"></a>

```python
capacity: DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesCapacityList</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `domain_id`<sup>Required</sup> <a name="domain_id" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.domainId"></a>

```python
domain_id: str
```

- *Type:* str

---

##### `email_notification`<sup>Required</sup> <a name="email_notification" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.emailNotification"></a>

```python
email_notification: str
```

- *Type:* str

---

##### `feature_bundle`<sup>Required</sup> <a name="feature_bundle" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.featureBundle"></a>

```python
feature_bundle: str
```

- *Type:* str

---

##### `feature_set`<sup>Required</sup> <a name="feature_set" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.featureSet"></a>

```python
feature_set: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `idcs_access_token`<sup>Required</sup> <a name="idcs_access_token" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.idcsAccessToken"></a>

```python
idcs_access_token: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `license_type`<sup>Required</sup> <a name="license_type" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.licenseType"></a>

```python
license_type: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network_endpoint_details`<sup>Required</sup> <a name="network_endpoint_details" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.networkEndpointDetails"></a>

```python
network_endpoint_details: DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList">DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesNetworkEndpointDetailsList</a>

---

##### `service_url`<sup>Required</sup> <a name="service_url" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.serviceUrl"></a>

```python
service_url: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `update_channel`<sup>Required</sup> <a name="update_channel" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.updateChannel"></a>

```python
update_channel: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstancesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciAnalyticsAnalyticsInstancesAnalyticsInstances
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesAnalyticsInstances">DataOciAnalyticsAnalyticsInstancesAnalyticsInstances</a>

---


### DataOciAnalyticsAnalyticsInstancesFilterList <a name="DataOciAnalyticsAnalyticsInstancesFilterList" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_analytics_analytics_instances

dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciAnalyticsAnalyticsInstancesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter">DataOciAnalyticsAnalyticsInstancesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciAnalyticsAnalyticsInstancesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter">DataOciAnalyticsAnalyticsInstancesFilter</a>]]

---


### DataOciAnalyticsAnalyticsInstancesFilterOutputReference <a name="DataOciAnalyticsAnalyticsInstancesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_analytics_analytics_instances

dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter">DataOciAnalyticsAnalyticsInstancesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciAnalyticsAnalyticsInstancesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciAnalyticsAnalyticsInstances.DataOciAnalyticsAnalyticsInstancesFilter">DataOciAnalyticsAnalyticsInstancesFilter</a>]

---



