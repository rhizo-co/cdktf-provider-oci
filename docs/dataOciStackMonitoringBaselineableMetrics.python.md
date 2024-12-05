# `dataOciStackMonitoringBaselineableMetrics` Submodule <a name="`dataOciStackMonitoringBaselineableMetrics` Submodule" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciStackMonitoringBaselineableMetrics <a name="DataOciStackMonitoringBaselineableMetrics" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics oci_stack_monitoring_baselineable_metrics}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_baselineable_metrics

dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  baselineable_metric_id: str = None,
  compartment_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciStackMonitoringBaselineableMetricsFilter]] = None,
  id: str = None,
  is_out_of_box: typing.Union[bool, IResolvable] = None,
  metric_namespace: str = None,
  name: str = None,
  resource_group: str = None,
  resource_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.baselineableMetricId">baselineable_metric_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#baselineable_metric_id DataOciStackMonitoringBaselineableMetrics#baselineable_metric_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#compartment_id DataOciStackMonitoringBaselineableMetrics#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilter">DataOciStackMonitoringBaselineableMetricsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#id DataOciStackMonitoringBaselineableMetrics#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.isOutOfBox">is_out_of_box</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#is_out_of_box DataOciStackMonitoringBaselineableMetrics#is_out_of_box}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.metricNamespace">metric_namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#metric_namespace DataOciStackMonitoringBaselineableMetrics#metric_namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#name DataOciStackMonitoringBaselineableMetrics#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.resourceGroup">resource_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#resource_group DataOciStackMonitoringBaselineableMetrics#resource_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#resource_type DataOciStackMonitoringBaselineableMetrics#resource_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `baselineable_metric_id`<sup>Optional</sup> <a name="baselineable_metric_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.baselineableMetricId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#baselineable_metric_id DataOciStackMonitoringBaselineableMetrics#baselineable_metric_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#compartment_id DataOciStackMonitoringBaselineableMetrics#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilter">DataOciStackMonitoringBaselineableMetricsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#filter DataOciStackMonitoringBaselineableMetrics#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#id DataOciStackMonitoringBaselineableMetrics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_out_of_box`<sup>Optional</sup> <a name="is_out_of_box" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.isOutOfBox"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#is_out_of_box DataOciStackMonitoringBaselineableMetrics#is_out_of_box}.

---

##### `metric_namespace`<sup>Optional</sup> <a name="metric_namespace" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.metricNamespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#metric_namespace DataOciStackMonitoringBaselineableMetrics#metric_namespace}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#name DataOciStackMonitoringBaselineableMetrics#name}.

---

##### `resource_group`<sup>Optional</sup> <a name="resource_group" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.resourceGroup"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#resource_group DataOciStackMonitoringBaselineableMetrics#resource_group}.

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.Initializer.parameter.resourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#resource_type DataOciStackMonitoringBaselineableMetrics#resource_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.resetBaselineableMetricId">reset_baselineable_metric_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.resetIsOutOfBox">reset_is_out_of_box</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.resetMetricNamespace">reset_metric_namespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.resetResourceGroup">reset_resource_group</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.resetResourceType">reset_resource_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciStackMonitoringBaselineableMetricsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilter">DataOciStackMonitoringBaselineableMetricsFilter</a>]]

---

##### `reset_baselineable_metric_id` <a name="reset_baselineable_metric_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.resetBaselineableMetricId"></a>

```python
def reset_baselineable_metric_id() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_out_of_box` <a name="reset_is_out_of_box" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.resetIsOutOfBox"></a>

```python
def reset_is_out_of_box() -> None
```

##### `reset_metric_namespace` <a name="reset_metric_namespace" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.resetMetricNamespace"></a>

```python
def reset_metric_namespace() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_resource_group` <a name="reset_resource_group" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.resetResourceGroup"></a>

```python
def reset_resource_group() -> None
```

##### `reset_resource_type` <a name="reset_resource_type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.resetResourceType"></a>

```python
def reset_resource_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciStackMonitoringBaselineableMetrics resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_baselineable_metrics

dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_baselineable_metrics

dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_baselineable_metrics

dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_baselineable_metrics

dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciStackMonitoringBaselineableMetrics resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciStackMonitoringBaselineableMetrics to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciStackMonitoringBaselineableMetrics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciStackMonitoringBaselineableMetrics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.baselineableMetricSummaryCollection">baselineable_metric_summary_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList">DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList">DataOciStackMonitoringBaselineableMetricsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.baselineableMetricIdInput">baselineable_metric_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilter">DataOciStackMonitoringBaselineableMetricsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.isOutOfBoxInput">is_out_of_box_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.metricNamespaceInput">metric_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.resourceGroupInput">resource_group_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.baselineableMetricId">baselineable_metric_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.isOutOfBox">is_out_of_box</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.metricNamespace">metric_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.resourceGroup">resource_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `baselineable_metric_summary_collection`<sup>Required</sup> <a name="baselineable_metric_summary_collection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.baselineableMetricSummaryCollection"></a>

```python
baselineable_metric_summary_collection: DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList">DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.filter"></a>

```python
filter: DataOciStackMonitoringBaselineableMetricsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList">DataOciStackMonitoringBaselineableMetricsFilterList</a>

---

##### `baselineable_metric_id_input`<sup>Optional</sup> <a name="baselineable_metric_id_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.baselineableMetricIdInput"></a>

```python
baselineable_metric_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciStackMonitoringBaselineableMetricsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilter">DataOciStackMonitoringBaselineableMetricsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_out_of_box_input`<sup>Optional</sup> <a name="is_out_of_box_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.isOutOfBoxInput"></a>

```python
is_out_of_box_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metric_namespace_input`<sup>Optional</sup> <a name="metric_namespace_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.metricNamespaceInput"></a>

```python
metric_namespace_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_group_input`<sup>Optional</sup> <a name="resource_group_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.resourceGroupInput"></a>

```python
resource_group_input: str
```

- *Type:* str

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `baselineable_metric_id`<sup>Required</sup> <a name="baselineable_metric_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.baselineableMetricId"></a>

```python
baselineable_metric_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_out_of_box`<sup>Required</sup> <a name="is_out_of_box" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.isOutOfBox"></a>

```python
is_out_of_box: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metric_namespace`<sup>Required</sup> <a name="metric_namespace" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.metricNamespace"></a>

```python
metric_namespace: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_group`<sup>Required</sup> <a name="resource_group" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetrics.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollection <a name="DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_baselineable_metrics

dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollection()
```


### DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItems <a name="DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_baselineable_metrics

dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItems()
```


### DataOciStackMonitoringBaselineableMetricsConfig <a name="DataOciStackMonitoringBaselineableMetricsConfig" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_baselineable_metrics

dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  baselineable_metric_id: str = None,
  compartment_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciStackMonitoringBaselineableMetricsFilter]] = None,
  id: str = None,
  is_out_of_box: typing.Union[bool, IResolvable] = None,
  metric_namespace: str = None,
  name: str = None,
  resource_group: str = None,
  resource_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.baselineableMetricId">baselineable_metric_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#baselineable_metric_id DataOciStackMonitoringBaselineableMetrics#baselineable_metric_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#compartment_id DataOciStackMonitoringBaselineableMetrics#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilter">DataOciStackMonitoringBaselineableMetricsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#id DataOciStackMonitoringBaselineableMetrics#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.isOutOfBox">is_out_of_box</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#is_out_of_box DataOciStackMonitoringBaselineableMetrics#is_out_of_box}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.metricNamespace">metric_namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#metric_namespace DataOciStackMonitoringBaselineableMetrics#metric_namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#name DataOciStackMonitoringBaselineableMetrics#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.resourceGroup">resource_group</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#resource_group DataOciStackMonitoringBaselineableMetrics#resource_group}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#resource_type DataOciStackMonitoringBaselineableMetrics#resource_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `baselineable_metric_id`<sup>Optional</sup> <a name="baselineable_metric_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.baselineableMetricId"></a>

```python
baselineable_metric_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#baselineable_metric_id DataOciStackMonitoringBaselineableMetrics#baselineable_metric_id}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#compartment_id DataOciStackMonitoringBaselineableMetrics#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciStackMonitoringBaselineableMetricsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilter">DataOciStackMonitoringBaselineableMetricsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#filter DataOciStackMonitoringBaselineableMetrics#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#id DataOciStackMonitoringBaselineableMetrics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_out_of_box`<sup>Optional</sup> <a name="is_out_of_box" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.isOutOfBox"></a>

```python
is_out_of_box: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#is_out_of_box DataOciStackMonitoringBaselineableMetrics#is_out_of_box}.

---

##### `metric_namespace`<sup>Optional</sup> <a name="metric_namespace" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.metricNamespace"></a>

```python
metric_namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#metric_namespace DataOciStackMonitoringBaselineableMetrics#metric_namespace}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#name DataOciStackMonitoringBaselineableMetrics#name}.

---

##### `resource_group`<sup>Optional</sup> <a name="resource_group" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#resource_group DataOciStackMonitoringBaselineableMetrics#resource_group}.

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsConfig.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#resource_type DataOciStackMonitoringBaselineableMetrics#resource_type}.

---

### DataOciStackMonitoringBaselineableMetricsFilter <a name="DataOciStackMonitoringBaselineableMetricsFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_baselineable_metrics

dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#name DataOciStackMonitoringBaselineableMetrics#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#values DataOciStackMonitoringBaselineableMetrics#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#regex DataOciStackMonitoringBaselineableMetrics#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#name DataOciStackMonitoringBaselineableMetrics#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#values DataOciStackMonitoringBaselineableMetrics#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_baselineable_metrics#regex DataOciStackMonitoringBaselineableMetrics#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList <a name="DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_baselineable_metrics

dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference <a name="DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_baselineable_metrics

dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.column">column</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.isOutOfBox">is_out_of_box</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.lastUpdatedBy">last_updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.resourceGroup">resource_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.tenancyId">tenancy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.timeLastUpdated">time_last_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItems">DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `column`<sup>Required</sup> <a name="column" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.column"></a>

```python
column: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_out_of_box`<sup>Required</sup> <a name="is_out_of_box" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.isOutOfBox"></a>

```python
is_out_of_box: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `last_updated_by`<sup>Required</sup> <a name="last_updated_by" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.lastUpdatedBy"></a>

```python
last_updated_by: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `resource_group`<sup>Required</sup> <a name="resource_group" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `tenancy_id`<sup>Required</sup> <a name="tenancy_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.tenancyId"></a>

```python
tenancy_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_last_updated`<sup>Required</sup> <a name="time_last_updated" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.timeLastUpdated"></a>

```python
time_last_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItems">DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItems</a>

---


### DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList <a name="DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_baselineable_metrics

dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference <a name="DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_baselineable_metrics

dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList">DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollection">DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.property.items"></a>

```python
items: DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList">DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollection">DataOciStackMonitoringBaselineableMetricsBaselineableMetricSummaryCollection</a>

---


### DataOciStackMonitoringBaselineableMetricsFilterList <a name="DataOciStackMonitoringBaselineableMetricsFilterList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_baselineable_metrics

dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringBaselineableMetricsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilter">DataOciStackMonitoringBaselineableMetricsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciStackMonitoringBaselineableMetricsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilter">DataOciStackMonitoringBaselineableMetricsFilter</a>]]

---


### DataOciStackMonitoringBaselineableMetricsFilterOutputReference <a name="DataOciStackMonitoringBaselineableMetricsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_baselineable_metrics

dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilter">DataOciStackMonitoringBaselineableMetricsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciStackMonitoringBaselineableMetricsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringBaselineableMetrics.DataOciStackMonitoringBaselineableMetricsFilter">DataOciStackMonitoringBaselineableMetricsFilter</a>]

---



