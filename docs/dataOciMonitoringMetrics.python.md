# `dataOciMonitoringMetrics` Submodule <a name="`dataOciMonitoringMetrics` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMonitoringMetrics <a name="DataOciMonitoringMetrics" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics oci_monitoring_metrics}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_metrics

dataOciMonitoringMetrics.DataOciMonitoringMetrics(
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
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  dimension_filters: typing.Mapping[str] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciMonitoringMetricsFilter]] = None,
  group_by: typing.List[str] = None,
  id: str = None,
  name: str = None,
  namespace: str = None,
  resource_group: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics#compartment_id DataOciMonitoringMetrics#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.Initializer.parameter.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics#compartment_id_in_subtree DataOciMonitoringMetrics#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.Initializer.parameter.dimensionFilters">dimension_filters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics#dimension_filters DataOciMonitoringMetrics#dimension_filters}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilter">DataOciMonitoringMetricsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.Initializer.parameter.groupBy">group_by</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics#group_by DataOciMonitoringMetrics#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics#id DataOciMonitoringMetrics#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics#name DataOciMonitoringMetrics#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics#namespace DataOciMonitoringMetrics#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.Initializer.parameter.resourceGroup">resource_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics#resource_group DataOciMonitoringMetrics#resource_group}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics#compartment_id DataOciMonitoringMetrics#compartment_id}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.Initializer.parameter.compartmentIdInSubtree"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics#compartment_id_in_subtree DataOciMonitoringMetrics#compartment_id_in_subtree}.

---

##### `dimension_filters`<sup>Optional</sup> <a name="dimension_filters" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.Initializer.parameter.dimensionFilters"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics#dimension_filters DataOciMonitoringMetrics#dimension_filters}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilter">DataOciMonitoringMetricsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics#filter DataOciMonitoringMetrics#filter}

---

##### `group_by`<sup>Optional</sup> <a name="group_by" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.Initializer.parameter.groupBy"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics#group_by DataOciMonitoringMetrics#group_by}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics#id DataOciMonitoringMetrics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics#name DataOciMonitoringMetrics#name}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics#namespace DataOciMonitoringMetrics#namespace}.

---

##### `resource_group`<sup>Optional</sup> <a name="resource_group" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.Initializer.parameter.resourceGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics#resource_group DataOciMonitoringMetrics#resource_group}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.resetCompartmentIdInSubtree">reset_compartment_id_in_subtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.resetDimensionFilters">reset_dimension_filters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.resetGroupBy">reset_group_by</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.resetResourceGroup">reset_resource_group</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciMonitoringMetricsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilter">DataOciMonitoringMetricsFilter</a>]]

---

##### `reset_compartment_id_in_subtree` <a name="reset_compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.resetCompartmentIdInSubtree"></a>

```python
def reset_compartment_id_in_subtree() -> None
```

##### `reset_dimension_filters` <a name="reset_dimension_filters" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.resetDimensionFilters"></a>

```python
def reset_dimension_filters() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_group_by` <a name="reset_group_by" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.resetGroupBy"></a>

```python
def reset_group_by() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_resource_group` <a name="reset_resource_group" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.resetResourceGroup"></a>

```python
def reset_resource_group() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciMonitoringMetrics resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_metrics

dataOciMonitoringMetrics.DataOciMonitoringMetrics.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_metrics

dataOciMonitoringMetrics.DataOciMonitoringMetrics.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_metrics

dataOciMonitoringMetrics.DataOciMonitoringMetrics.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_metrics

dataOciMonitoringMetrics.DataOciMonitoringMetrics.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciMonitoringMetrics resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciMonitoringMetrics to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciMonitoringMetrics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMonitoringMetrics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterList">DataOciMonitoringMetricsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.metrics">metrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsList">DataOciMonitoringMetricsMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.compartmentIdInSubtreeInput">compartment_id_in_subtree_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.dimensionFiltersInput">dimension_filters_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilter">DataOciMonitoringMetricsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.groupByInput">group_by_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.resourceGroupInput">resource_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.dimensionFilters">dimension_filters</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.groupBy">group_by</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.resourceGroup">resource_group</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.filter"></a>

```python
filter: DataOciMonitoringMetricsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterList">DataOciMonitoringMetricsFilterList</a>

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.metrics"></a>

```python
metrics: DataOciMonitoringMetricsMetricsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsList">DataOciMonitoringMetricsMetricsList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `compartment_id_in_subtree_input`<sup>Optional</sup> <a name="compartment_id_in_subtree_input" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.compartmentIdInSubtreeInput"></a>

```python
compartment_id_in_subtree_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dimension_filters_input`<sup>Optional</sup> <a name="dimension_filters_input" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.dimensionFiltersInput"></a>

```python
dimension_filters_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciMonitoringMetricsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilter">DataOciMonitoringMetricsFilter</a>]]

---

##### `group_by_input`<sup>Optional</sup> <a name="group_by_input" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.groupByInput"></a>

```python
group_by_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `resource_group_input`<sup>Optional</sup> <a name="resource_group_input" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.resourceGroupInput"></a>

```python
resource_group_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `dimension_filters`<sup>Required</sup> <a name="dimension_filters" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.dimensionFilters"></a>

```python
dimension_filters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `group_by`<sup>Required</sup> <a name="group_by" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.groupBy"></a>

```python
group_by: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `resource_group`<sup>Required</sup> <a name="resource_group" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetrics.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMonitoringMetricsConfig <a name="DataOciMonitoringMetricsConfig" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_metrics

dataOciMonitoringMetrics.DataOciMonitoringMetricsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  compartment_id_in_subtree: typing.Union[bool, IResolvable] = None,
  dimension_filters: typing.Mapping[str] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciMonitoringMetricsFilter]] = None,
  group_by: typing.List[str] = None,
  id: str = None,
  name: str = None,
  namespace: str = None,
  resource_group: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics#compartment_id DataOciMonitoringMetrics#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsConfig.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics#compartment_id_in_subtree DataOciMonitoringMetrics#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsConfig.property.dimensionFilters">dimension_filters</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics#dimension_filters DataOciMonitoringMetrics#dimension_filters}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilter">DataOciMonitoringMetricsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsConfig.property.groupBy">group_by</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics#group_by DataOciMonitoringMetrics#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics#id DataOciMonitoringMetrics#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics#name DataOciMonitoringMetrics#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics#namespace DataOciMonitoringMetrics#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsConfig.property.resourceGroup">resource_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics#resource_group DataOciMonitoringMetrics#resource_group}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics#compartment_id DataOciMonitoringMetrics#compartment_id}.

---

##### `compartment_id_in_subtree`<sup>Optional</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsConfig.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics#compartment_id_in_subtree DataOciMonitoringMetrics#compartment_id_in_subtree}.

---

##### `dimension_filters`<sup>Optional</sup> <a name="dimension_filters" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsConfig.property.dimensionFilters"></a>

```python
dimension_filters: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics#dimension_filters DataOciMonitoringMetrics#dimension_filters}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciMonitoringMetricsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilter">DataOciMonitoringMetricsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics#filter DataOciMonitoringMetrics#filter}

---

##### `group_by`<sup>Optional</sup> <a name="group_by" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsConfig.property.groupBy"></a>

```python
group_by: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics#group_by DataOciMonitoringMetrics#group_by}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics#id DataOciMonitoringMetrics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics#name DataOciMonitoringMetrics#name}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics#namespace DataOciMonitoringMetrics#namespace}.

---

##### `resource_group`<sup>Optional</sup> <a name="resource_group" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsConfig.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics#resource_group DataOciMonitoringMetrics#resource_group}.

---

### DataOciMonitoringMetricsFilter <a name="DataOciMonitoringMetricsFilter" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_metrics

dataOciMonitoringMetrics.DataOciMonitoringMetricsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics#name DataOciMonitoringMetrics#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics#values DataOciMonitoringMetrics#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics#regex DataOciMonitoringMetrics#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics#name DataOciMonitoringMetrics#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics#values DataOciMonitoringMetrics#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/monitoring_metrics#regex DataOciMonitoringMetrics#regex}.

---

### DataOciMonitoringMetricsMetrics <a name="DataOciMonitoringMetricsMetrics" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetrics.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_metrics

dataOciMonitoringMetrics.DataOciMonitoringMetricsMetrics()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciMonitoringMetricsFilterList <a name="DataOciMonitoringMetricsFilterList" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_metrics

dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMonitoringMetricsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilter">DataOciMonitoringMetricsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciMonitoringMetricsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilter">DataOciMonitoringMetricsFilter</a>]]

---


### DataOciMonitoringMetricsFilterOutputReference <a name="DataOciMonitoringMetricsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_metrics

dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilter">DataOciMonitoringMetricsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciMonitoringMetricsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsFilter">DataOciMonitoringMetricsFilter</a>]

---


### DataOciMonitoringMetricsMetricsList <a name="DataOciMonitoringMetricsMetricsList" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_metrics

dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciMonitoringMetricsMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciMonitoringMetricsMetricsOutputReference <a name="DataOciMonitoringMetricsMetricsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_monitoring_metrics

dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.property.dimensionFilters">dimension_filters</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.property.dimensions">dimensions</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.property.groupBy">group_by</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.property.resourceGroup">resource_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetrics">DataOciMonitoringMetricsMetrics</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `dimension_filters`<sup>Required</sup> <a name="dimension_filters" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.property.dimensionFilters"></a>

```python
dimension_filters: StringMap
```

- *Type:* cdktf.StringMap

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.property.dimensions"></a>

```python
dimensions: StringMap
```

- *Type:* cdktf.StringMap

---

##### `group_by`<sup>Required</sup> <a name="group_by" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.property.groupBy"></a>

```python
group_by: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `resource_group`<sup>Required</sup> <a name="resource_group" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetricsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciMonitoringMetricsMetrics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMonitoringMetrics.DataOciMonitoringMetricsMetrics">DataOciMonitoringMetricsMetrics</a>

---



