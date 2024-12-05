# `dataOciStackMonitoringMonitoredResourceTypes` Submodule <a name="`dataOciStackMonitoringMonitoredResourceTypes` Submodule" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciStackMonitoringMonitoredResourceTypes <a name="DataOciStackMonitoringMonitoredResourceTypes" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types oci_stack_monitoring_monitored_resource_types}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_types

dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes(
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
  exclude_fields: typing.List[str] = None,
  fields: typing.List[str] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciStackMonitoringMonitoredResourceTypesFilter]] = None,
  id: str = None,
  is_exclude_system_types: typing.Union[bool, IResolvable] = None,
  metric_namespace: str = None,
  name: str = None,
  status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#compartment_id DataOciStackMonitoringMonitoredResourceTypes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.excludeFields">exclude_fields</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#exclude_fields DataOciStackMonitoringMonitoredResourceTypes#exclude_fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.fields">fields</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#fields DataOciStackMonitoringMonitoredResourceTypes#fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilter">DataOciStackMonitoringMonitoredResourceTypesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#id DataOciStackMonitoringMonitoredResourceTypes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.isExcludeSystemTypes">is_exclude_system_types</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#is_exclude_system_types DataOciStackMonitoringMonitoredResourceTypes#is_exclude_system_types}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.metricNamespace">metric_namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#metric_namespace DataOciStackMonitoringMonitoredResourceTypes#metric_namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#name DataOciStackMonitoringMonitoredResourceTypes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#status DataOciStackMonitoringMonitoredResourceTypes#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#compartment_id DataOciStackMonitoringMonitoredResourceTypes#compartment_id}.

---

##### `exclude_fields`<sup>Optional</sup> <a name="exclude_fields" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.excludeFields"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#exclude_fields DataOciStackMonitoringMonitoredResourceTypes#exclude_fields}.

---

##### `fields`<sup>Optional</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.fields"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#fields DataOciStackMonitoringMonitoredResourceTypes#fields}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilter">DataOciStackMonitoringMonitoredResourceTypesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#filter DataOciStackMonitoringMonitoredResourceTypes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#id DataOciStackMonitoringMonitoredResourceTypes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_exclude_system_types`<sup>Optional</sup> <a name="is_exclude_system_types" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.isExcludeSystemTypes"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#is_exclude_system_types DataOciStackMonitoringMonitoredResourceTypes#is_exclude_system_types}.

---

##### `metric_namespace`<sup>Optional</sup> <a name="metric_namespace" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.metricNamespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#metric_namespace DataOciStackMonitoringMonitoredResourceTypes#metric_namespace}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#name DataOciStackMonitoringMonitoredResourceTypes#name}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#status DataOciStackMonitoringMonitoredResourceTypes#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.resetExcludeFields">reset_exclude_fields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.resetFields">reset_fields</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.resetIsExcludeSystemTypes">reset_is_exclude_system_types</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.resetMetricNamespace">reset_metric_namespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.resetStatus">reset_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciStackMonitoringMonitoredResourceTypesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilter">DataOciStackMonitoringMonitoredResourceTypesFilter</a>]]

---

##### `reset_exclude_fields` <a name="reset_exclude_fields" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.resetExcludeFields"></a>

```python
def reset_exclude_fields() -> None
```

##### `reset_fields` <a name="reset_fields" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.resetFields"></a>

```python
def reset_fields() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_exclude_system_types` <a name="reset_is_exclude_system_types" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.resetIsExcludeSystemTypes"></a>

```python
def reset_is_exclude_system_types() -> None
```

##### `reset_metric_namespace` <a name="reset_metric_namespace" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.resetMetricNamespace"></a>

```python
def reset_metric_namespace() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_status` <a name="reset_status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.resetStatus"></a>

```python
def reset_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciStackMonitoringMonitoredResourceTypes resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_types

dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_types

dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_types

dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_types

dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciStackMonitoringMonitoredResourceTypes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciStackMonitoringMonitoredResourceTypes to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciStackMonitoringMonitoredResourceTypes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciStackMonitoringMonitoredResourceTypes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList">DataOciStackMonitoringMonitoredResourceTypesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.monitoredResourceTypesCollection">monitored_resource_types_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList">DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.excludeFieldsInput">exclude_fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.fieldsInput">fields_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilter">DataOciStackMonitoringMonitoredResourceTypesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.isExcludeSystemTypesInput">is_exclude_system_types_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.metricNamespaceInput">metric_namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.excludeFields">exclude_fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.fields">fields</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.isExcludeSystemTypes">is_exclude_system_types</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.metricNamespace">metric_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.filter"></a>

```python
filter: DataOciStackMonitoringMonitoredResourceTypesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList">DataOciStackMonitoringMonitoredResourceTypesFilterList</a>

---

##### `monitored_resource_types_collection`<sup>Required</sup> <a name="monitored_resource_types_collection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.monitoredResourceTypesCollection"></a>

```python
monitored_resource_types_collection: DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList">DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `exclude_fields_input`<sup>Optional</sup> <a name="exclude_fields_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.excludeFieldsInput"></a>

```python
exclude_fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `fields_input`<sup>Optional</sup> <a name="fields_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.fieldsInput"></a>

```python
fields_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciStackMonitoringMonitoredResourceTypesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilter">DataOciStackMonitoringMonitoredResourceTypesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_exclude_system_types_input`<sup>Optional</sup> <a name="is_exclude_system_types_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.isExcludeSystemTypesInput"></a>

```python
is_exclude_system_types_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metric_namespace_input`<sup>Optional</sup> <a name="metric_namespace_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.metricNamespaceInput"></a>

```python
metric_namespace_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `exclude_fields`<sup>Required</sup> <a name="exclude_fields" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.excludeFields"></a>

```python
exclude_fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `fields`<sup>Required</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.fields"></a>

```python
fields: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_exclude_system_types`<sup>Required</sup> <a name="is_exclude_system_types" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.isExcludeSystemTypes"></a>

```python
is_exclude_system_types: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `metric_namespace`<sup>Required</sup> <a name="metric_namespace" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.metricNamespace"></a>

```python
metric_namespace: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypes.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciStackMonitoringMonitoredResourceTypesConfig <a name="DataOciStackMonitoringMonitoredResourceTypesConfig" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_types

dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  exclude_fields: typing.List[str] = None,
  fields: typing.List[str] = None,
  filter: typing.Union[IResolvable, typing.List[DataOciStackMonitoringMonitoredResourceTypesFilter]] = None,
  id: str = None,
  is_exclude_system_types: typing.Union[bool, IResolvable] = None,
  metric_namespace: str = None,
  name: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#compartment_id DataOciStackMonitoringMonitoredResourceTypes#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.excludeFields">exclude_fields</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#exclude_fields DataOciStackMonitoringMonitoredResourceTypes#exclude_fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.fields">fields</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#fields DataOciStackMonitoringMonitoredResourceTypes#fields}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilter">DataOciStackMonitoringMonitoredResourceTypesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#id DataOciStackMonitoringMonitoredResourceTypes#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.isExcludeSystemTypes">is_exclude_system_types</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#is_exclude_system_types DataOciStackMonitoringMonitoredResourceTypes#is_exclude_system_types}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.metricNamespace">metric_namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#metric_namespace DataOciStackMonitoringMonitoredResourceTypes#metric_namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#name DataOciStackMonitoringMonitoredResourceTypes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#status DataOciStackMonitoringMonitoredResourceTypes#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#compartment_id DataOciStackMonitoringMonitoredResourceTypes#compartment_id}.

---

##### `exclude_fields`<sup>Optional</sup> <a name="exclude_fields" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.excludeFields"></a>

```python
exclude_fields: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#exclude_fields DataOciStackMonitoringMonitoredResourceTypes#exclude_fields}.

---

##### `fields`<sup>Optional</sup> <a name="fields" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.fields"></a>

```python
fields: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#fields DataOciStackMonitoringMonitoredResourceTypes#fields}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciStackMonitoringMonitoredResourceTypesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilter">DataOciStackMonitoringMonitoredResourceTypesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#filter DataOciStackMonitoringMonitoredResourceTypes#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#id DataOciStackMonitoringMonitoredResourceTypes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_exclude_system_types`<sup>Optional</sup> <a name="is_exclude_system_types" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.isExcludeSystemTypes"></a>

```python
is_exclude_system_types: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#is_exclude_system_types DataOciStackMonitoringMonitoredResourceTypes#is_exclude_system_types}.

---

##### `metric_namespace`<sup>Optional</sup> <a name="metric_namespace" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.metricNamespace"></a>

```python
metric_namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#metric_namespace DataOciStackMonitoringMonitoredResourceTypes#metric_namespace}.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#name DataOciStackMonitoringMonitoredResourceTypes#name}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#status DataOciStackMonitoringMonitoredResourceTypes#status}.

---

### DataOciStackMonitoringMonitoredResourceTypesFilter <a name="DataOciStackMonitoringMonitoredResourceTypesFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_types

dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#name DataOciStackMonitoringMonitoredResourceTypes#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#values DataOciStackMonitoringMonitoredResourceTypes#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#regex DataOciStackMonitoringMonitoredResourceTypes#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#name DataOciStackMonitoringMonitoredResourceTypes#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#values DataOciStackMonitoringMonitoredResourceTypes#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_types#regex DataOciStackMonitoringMonitoredResourceTypes#regex}.

---

### DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollection <a name="DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_types

dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollection()
```


### DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItems <a name="DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_types

dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItems()
```


### DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadata <a name="DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadata"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadata.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_types

dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadata()
```


### DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySets <a name="DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySets" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySets.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_types

dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySets()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciStackMonitoringMonitoredResourceTypesFilterList <a name="DataOciStackMonitoringMonitoredResourceTypesFilterList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_types

dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilter">DataOciStackMonitoringMonitoredResourceTypesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciStackMonitoringMonitoredResourceTypesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilter">DataOciStackMonitoringMonitoredResourceTypesFilter</a>]]

---


### DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference <a name="DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_types

dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilter">DataOciStackMonitoringMonitoredResourceTypesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciStackMonitoringMonitoredResourceTypesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesFilter">DataOciStackMonitoringMonitoredResourceTypesFilter</a>]

---


### DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList <a name="DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_types

dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList <a name="DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_types

dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference <a name="DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_types

dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.property.agentProperties">agent_properties</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.property.format">format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.property.requiredProperties">required_properties</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.property.uniquePropertySets">unique_property_sets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList">DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.property.validPropertiesForCreate">valid_properties_for_create</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.property.validPropertiesForUpdate">valid_properties_for_update</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.property.validPropertyValues">valid_property_values</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadata">DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_properties`<sup>Required</sup> <a name="agent_properties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.property.agentProperties"></a>

```python
agent_properties: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `format`<sup>Required</sup> <a name="format" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.property.format"></a>

```python
format: str
```

- *Type:* str

---

##### `required_properties`<sup>Required</sup> <a name="required_properties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.property.requiredProperties"></a>

```python
required_properties: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `unique_property_sets`<sup>Required</sup> <a name="unique_property_sets" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.property.uniquePropertySets"></a>

```python
unique_property_sets: DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList">DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList</a>

---

##### `valid_properties_for_create`<sup>Required</sup> <a name="valid_properties_for_create" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.property.validPropertiesForCreate"></a>

```python
valid_properties_for_create: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `valid_properties_for_update`<sup>Required</sup> <a name="valid_properties_for_update" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.property.validPropertiesForUpdate"></a>

```python
valid_properties_for_update: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `valid_property_values`<sup>Required</sup> <a name="valid_property_values" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.property.validPropertyValues"></a>

```python
valid_property_values: StringMap
```

- *Type:* cdktf.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference.property.internalValue"></a>

```python
internal_value: DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadata
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadata">DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadata</a>

---


### DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList <a name="DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_types

dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference <a name="DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_types

dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.property.properties">properties</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySets">DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.property.properties"></a>

```python
properties: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySets
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySets">DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySets</a>

---


### DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference <a name="DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_types

dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.metadata">metadata</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList">DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.metricNamespace">metric_namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.resourceCategory">resource_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItems">DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.metadata"></a>

```python
metadata: DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList">DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList</a>

---

##### `metric_namespace`<sup>Required</sup> <a name="metric_namespace" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.metricNamespace"></a>

```python
metric_namespace: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_category`<sup>Required</sup> <a name="resource_category" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.resourceCategory"></a>

```python
resource_category: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItems">DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItems</a>

---


### DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList <a name="DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_types

dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference <a name="DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_types

dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList">DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollection">DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.property.items"></a>

```python
items: DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList">DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTypes.DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollection">DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollection</a>

---



