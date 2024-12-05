# `dataOciStackMonitoringMetricExtensions` Submodule <a name="`dataOciStackMonitoringMetricExtensions` Submodule" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciStackMonitoringMetricExtensions <a name="DataOciStackMonitoringMetricExtensions" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions oci_stack_monitoring_metric_extensions}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extensions

dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions(
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
  enabled_on_resource_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciStackMonitoringMetricExtensionsFilter]] = None,
  id: str = None,
  name: str = None,
  resource_type: str = None,
  state: str = None,
  status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#compartment_id DataOciStackMonitoringMetricExtensions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.enabledOnResourceId">enabled_on_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#enabled_on_resource_id DataOciStackMonitoringMetricExtensions#enabled_on_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter">DataOciStackMonitoringMetricExtensionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#id DataOciStackMonitoringMetricExtensions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#name DataOciStackMonitoringMetricExtensions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#resource_type DataOciStackMonitoringMetricExtensions#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#state DataOciStackMonitoringMetricExtensions#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#status DataOciStackMonitoringMetricExtensions#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#compartment_id DataOciStackMonitoringMetricExtensions#compartment_id}.

---

##### `enabled_on_resource_id`<sup>Optional</sup> <a name="enabled_on_resource_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.enabledOnResourceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#enabled_on_resource_id DataOciStackMonitoringMetricExtensions#enabled_on_resource_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter">DataOciStackMonitoringMetricExtensionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#filter DataOciStackMonitoringMetricExtensions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#id DataOciStackMonitoringMetricExtensions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#name DataOciStackMonitoringMetricExtensions#name}.

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.resourceType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#resource_type DataOciStackMonitoringMetricExtensions#resource_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.state"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#state DataOciStackMonitoringMetricExtensions#state}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#status DataOciStackMonitoringMetricExtensions#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetEnabledOnResourceId">reset_enabled_on_resource_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetResourceType">reset_resource_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetState">reset_state</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetStatus">reset_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciStackMonitoringMetricExtensionsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter">DataOciStackMonitoringMetricExtensionsFilter</a>]]

---

##### `reset_enabled_on_resource_id` <a name="reset_enabled_on_resource_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetEnabledOnResourceId"></a>

```python
def reset_enabled_on_resource_id() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_resource_type` <a name="reset_resource_type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetResourceType"></a>

```python
def reset_resource_type() -> None
```

##### `reset_state` <a name="reset_state" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetState"></a>

```python
def reset_state() -> None
```

##### `reset_status` <a name="reset_status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.resetStatus"></a>

```python
def reset_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciStackMonitoringMetricExtensions resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extensions

dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extensions

dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extensions

dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extensions

dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciStackMonitoringMetricExtensions resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciStackMonitoringMetricExtensions to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciStackMonitoringMetricExtensions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciStackMonitoringMetricExtensions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList">DataOciStackMonitoringMetricExtensionsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.metricExtensionCollection">metric_extension_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.enabledOnResourceIdInput">enabled_on_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter">DataOciStackMonitoringMetricExtensionsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.resourceTypeInput">resource_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.stateInput">state_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.enabledOnResourceId">enabled_on_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.filter"></a>

```python
filter: DataOciStackMonitoringMetricExtensionsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList">DataOciStackMonitoringMetricExtensionsFilterList</a>

---

##### `metric_extension_collection`<sup>Required</sup> <a name="metric_extension_collection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.metricExtensionCollection"></a>

```python
metric_extension_collection: DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `enabled_on_resource_id_input`<sup>Optional</sup> <a name="enabled_on_resource_id_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.enabledOnResourceIdInput"></a>

```python
enabled_on_resource_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciStackMonitoringMetricExtensionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter">DataOciStackMonitoringMetricExtensionsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `resource_type_input`<sup>Optional</sup> <a name="resource_type_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.resourceTypeInput"></a>

```python
resource_type_input: str
```

- *Type:* str

---

##### `state_input`<sup>Optional</sup> <a name="state_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.stateInput"></a>

```python
state_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `enabled_on_resource_id`<sup>Required</sup> <a name="enabled_on_resource_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.enabledOnResourceId"></a>

```python
enabled_on_resource_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensions.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciStackMonitoringMetricExtensionsConfig <a name="DataOciStackMonitoringMetricExtensionsConfig" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extensions

dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  enabled_on_resource_id: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciStackMonitoringMetricExtensionsFilter]] = None,
  id: str = None,
  name: str = None,
  resource_type: str = None,
  state: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#compartment_id DataOciStackMonitoringMetricExtensions#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.enabledOnResourceId">enabled_on_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#enabled_on_resource_id DataOciStackMonitoringMetricExtensions#enabled_on_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter">DataOciStackMonitoringMetricExtensionsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#id DataOciStackMonitoringMetricExtensions#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#name DataOciStackMonitoringMetricExtensions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.resourceType">resource_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#resource_type DataOciStackMonitoringMetricExtensions#resource_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.state">state</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#state DataOciStackMonitoringMetricExtensions#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#status DataOciStackMonitoringMetricExtensions#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#compartment_id DataOciStackMonitoringMetricExtensions#compartment_id}.

---

##### `enabled_on_resource_id`<sup>Optional</sup> <a name="enabled_on_resource_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.enabledOnResourceId"></a>

```python
enabled_on_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#enabled_on_resource_id DataOciStackMonitoringMetricExtensions#enabled_on_resource_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciStackMonitoringMetricExtensionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter">DataOciStackMonitoringMetricExtensionsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#filter DataOciStackMonitoringMetricExtensions#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#id DataOciStackMonitoringMetricExtensions#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#name DataOciStackMonitoringMetricExtensions#name}.

---

##### `resource_type`<sup>Optional</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#resource_type DataOciStackMonitoringMetricExtensions#resource_type}.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.state"></a>

```python
state: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#state DataOciStackMonitoringMetricExtensions#state}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#status DataOciStackMonitoringMetricExtensions#status}.

---

### DataOciStackMonitoringMetricExtensionsFilter <a name="DataOciStackMonitoringMetricExtensionsFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extensions

dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#name DataOciStackMonitoringMetricExtensions#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#values DataOciStackMonitoringMetricExtensions#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#regex DataOciStackMonitoringMetricExtensions#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#name DataOciStackMonitoringMetricExtensions#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#values DataOciStackMonitoringMetricExtensions#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_metric_extensions#regex DataOciStackMonitoringMetricExtensions#regex}.

---

### DataOciStackMonitoringMetricExtensionsMetricExtensionCollection <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extensions

dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollection()
```


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extensions

dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems()
```


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extensions

dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources()
```


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extensions

dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct()
```


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extensions

dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties()
```


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extensions

dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails()
```


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extensions

dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails()
```


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extensions

dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails()
```


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extensions

dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciStackMonitoringMetricExtensionsFilterList <a name="DataOciStackMonitoringMetricExtensionsFilterList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extensions

dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringMetricExtensionsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter">DataOciStackMonitoringMetricExtensionsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciStackMonitoringMetricExtensionsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter">DataOciStackMonitoringMetricExtensionsFilter</a>]]

---


### DataOciStackMonitoringMetricExtensionsFilterOutputReference <a name="DataOciStackMonitoringMetricExtensionsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extensions

dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter">DataOciStackMonitoringMetricExtensionsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciStackMonitoringMetricExtensionsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsFilter">DataOciStackMonitoringMetricExtensionsFilter</a>]

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extensions

dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extensions

dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResources</a>

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extensions

dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extensions

dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extensions

dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.computeExpression">compute_expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.isDimension">is_dimension</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.isHidden">is_hidden</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.metricCategory">metric_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compute_expression`<sup>Required</sup> <a name="compute_expression" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.computeExpression"></a>

```python
compute_expression: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `is_dimension`<sup>Required</sup> <a name="is_dimension" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.isDimension"></a>

```python
is_dimension: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_hidden`<sup>Required</sup> <a name="is_hidden" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.isHidden"></a>

```python
is_hidden: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `metric_category`<sup>Required</sup> <a name="metric_category" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.metricCategory"></a>

```python
metric_category: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStruct</a>

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extensions

dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.collectionMethod">collection_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.collectionRecurrences">collection_recurrences</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.createdBy">created_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.enabledOnResources">enabled_on_resources</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.enabledOnResourcesCount">enabled_on_resources_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.lastUpdatedBy">last_updated_by</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.metricList">metric_list</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.publishTrigger">publish_trigger</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.queryProperties">query_properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.resourceUri">resource_uri</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `collection_method`<sup>Required</sup> <a name="collection_method" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.collectionMethod"></a>

```python
collection_method: str
```

- *Type:* str

---

##### `collection_recurrences`<sup>Required</sup> <a name="collection_recurrences" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.collectionRecurrences"></a>

```python
collection_recurrences: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `created_by`<sup>Required</sup> <a name="created_by" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.createdBy"></a>

```python
created_by: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enabled_on_resources`<sup>Required</sup> <a name="enabled_on_resources" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.enabledOnResources"></a>

```python
enabled_on_resources: DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsEnabledOnResourcesList</a>

---

##### `enabled_on_resources_count`<sup>Required</sup> <a name="enabled_on_resources_count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.enabledOnResourcesCount"></a>

```python
enabled_on_resources_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `last_updated_by`<sup>Required</sup> <a name="last_updated_by" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.lastUpdatedBy"></a>

```python
last_updated_by: str
```

- *Type:* str

---

##### `metric_list`<sup>Required</sup> <a name="metric_list" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.metricList"></a>

```python
metric_list: DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsMetricListStructList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `publish_trigger`<sup>Required</sup> <a name="publish_trigger" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.publishTrigger"></a>

```python
publish_trigger: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `query_properties`<sup>Required</sup> <a name="query_properties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.queryProperties"></a>

```python
query_properties: DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList</a>

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `resource_uri`<sup>Required</sup> <a name="resource_uri" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.resourceUri"></a>

```python
resource_uri: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItems</a>

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extensions

dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extensions

dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.property.inParamPosition">in_param_position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.property.inParamValue">in_param_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `in_param_position`<sup>Required</sup> <a name="in_param_position" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.property.inParamPosition"></a>

```python
in_param_position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `in_param_value`<sup>Required</sup> <a name="in_param_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.property.inParamValue"></a>

```python
in_param_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetails</a>

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extensions

dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extensions

dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extensions

dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.property.outParamPosition">out_param_position</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.property.outParamType">out_param_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `out_param_position`<sup>Required</sup> <a name="out_param_position" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.property.outParamPosition"></a>

```python
out_param_position: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `out_param_type`<sup>Required</sup> <a name="out_param_type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.property.outParamType"></a>

```python
out_param_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetails</a>

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extensions

dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.arguments">arguments</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.autoRowPrefix">auto_row_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.collectionMethod">collection_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.command">command</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.delimiter">delimiter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.identityMetric">identity_metric</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.inParamDetails">in_param_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.isMetricServiceEnabled">is_metric_service_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.jmxAttributes">jmx_attributes</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.managedBeanQuery">managed_bean_query</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.outParamDetails">out_param_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.scriptDetails">script_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.sqlDetails">sql_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.sqlType">sql_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.startsWith">starts_with</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `arguments`<sup>Required</sup> <a name="arguments" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.arguments"></a>

```python
arguments: str
```

- *Type:* str

---

##### `auto_row_prefix`<sup>Required</sup> <a name="auto_row_prefix" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.autoRowPrefix"></a>

```python
auto_row_prefix: str
```

- *Type:* str

---

##### `collection_method`<sup>Required</sup> <a name="collection_method" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.collectionMethod"></a>

```python
collection_method: str
```

- *Type:* str

---

##### `command`<sup>Required</sup> <a name="command" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.command"></a>

```python
command: str
```

- *Type:* str

---

##### `delimiter`<sup>Required</sup> <a name="delimiter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.delimiter"></a>

```python
delimiter: str
```

- *Type:* str

---

##### `identity_metric`<sup>Required</sup> <a name="identity_metric" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.identityMetric"></a>

```python
identity_metric: str
```

- *Type:* str

---

##### `in_param_details`<sup>Required</sup> <a name="in_param_details" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.inParamDetails"></a>

```python
in_param_details: DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesInParamDetailsList</a>

---

##### `is_metric_service_enabled`<sup>Required</sup> <a name="is_metric_service_enabled" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.isMetricServiceEnabled"></a>

```python
is_metric_service_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `jmx_attributes`<sup>Required</sup> <a name="jmx_attributes" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.jmxAttributes"></a>

```python
jmx_attributes: str
```

- *Type:* str

---

##### `managed_bean_query`<sup>Required</sup> <a name="managed_bean_query" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.managedBeanQuery"></a>

```python
managed_bean_query: str
```

- *Type:* str

---

##### `out_param_details`<sup>Required</sup> <a name="out_param_details" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.outParamDetails"></a>

```python
out_param_details: DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutParamDetailsList</a>

---

##### `script_details`<sup>Required</sup> <a name="script_details" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.scriptDetails"></a>

```python
script_details: DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList</a>

---

##### `sql_details`<sup>Required</sup> <a name="sql_details" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.sqlDetails"></a>

```python
sql_details: DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList</a>

---

##### `sql_type`<sup>Required</sup> <a name="sql_type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.sqlType"></a>

```python
sql_type: str
```

- *Type:* str

---

##### `starts_with`<sup>Required</sup> <a name="starts_with" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.startsWith"></a>

```python
starts_with: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryProperties</a>

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extensions

dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extensions

dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesScriptDetails</a>

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extensions

dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extensions

dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.property.content">content</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.property.scriptFileName">script_file_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `content`<sup>Required</sup> <a name="content" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.property.content"></a>

```python
content: str
```

- *Type:* str

---

##### `script_file_name`<sup>Required</sup> <a name="script_file_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.property.scriptFileName"></a>

```python
script_file_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsQueryPropertiesSqlDetails</a>

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extensions

dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference <a name="DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_metric_extensions

dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollection">DataOciStackMonitoringMetricExtensionsMetricExtensionCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.property.items"></a>

```python
items: DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList">DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciStackMonitoringMetricExtensionsMetricExtensionCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMetricExtensions.DataOciStackMonitoringMetricExtensionsMetricExtensionCollection">DataOciStackMonitoringMetricExtensionsMetricExtensionCollection</a>

---



