# `dataOciStackMonitoringMonitoredResourceTasks` Submodule <a name="`dataOciStackMonitoringMonitoredResourceTasks` Submodule" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciStackMonitoringMonitoredResourceTasks <a name="DataOciStackMonitoringMonitoredResourceTasks" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_tasks oci_stack_monitoring_monitored_resource_tasks}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_tasks

dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks(
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
  filter: typing.Union[IResolvable, typing.List[DataOciStackMonitoringMonitoredResourceTasksFilter]] = None,
  id: str = None,
  status: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#compartment_id DataOciStackMonitoringMonitoredResourceTasks#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilter">DataOciStackMonitoringMonitoredResourceTasksFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#id DataOciStackMonitoringMonitoredResourceTasks#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#status DataOciStackMonitoringMonitoredResourceTasks#status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#compartment_id DataOciStackMonitoringMonitoredResourceTasks#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilter">DataOciStackMonitoringMonitoredResourceTasksFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#filter DataOciStackMonitoringMonitoredResourceTasks#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#id DataOciStackMonitoringMonitoredResourceTasks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#status DataOciStackMonitoringMonitoredResourceTasks#status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.resetStatus">reset_status</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciStackMonitoringMonitoredResourceTasksFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilter">DataOciStackMonitoringMonitoredResourceTasksFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_status` <a name="reset_status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.resetStatus"></a>

```python
def reset_status() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciStackMonitoringMonitoredResourceTasks resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_tasks

dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_tasks

dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_tasks

dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_tasks

dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciStackMonitoringMonitoredResourceTasks resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciStackMonitoringMonitoredResourceTasks to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciStackMonitoringMonitoredResourceTasks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciStackMonitoringMonitoredResourceTasks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList">DataOciStackMonitoringMonitoredResourceTasksFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.monitoredResourceTasksCollection">monitored_resource_tasks_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList">DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilter">DataOciStackMonitoringMonitoredResourceTasksFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.status">status</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.filter"></a>

```python
filter: DataOciStackMonitoringMonitoredResourceTasksFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList">DataOciStackMonitoringMonitoredResourceTasksFilterList</a>

---

##### `monitored_resource_tasks_collection`<sup>Required</sup> <a name="monitored_resource_tasks_collection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.monitoredResourceTasksCollection"></a>

```python
monitored_resource_tasks_collection: DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList">DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciStackMonitoringMonitoredResourceTasksFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilter">DataOciStackMonitoringMonitoredResourceTasksFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.status"></a>

```python
status: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasks.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciStackMonitoringMonitoredResourceTasksConfig <a name="DataOciStackMonitoringMonitoredResourceTasksConfig" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_tasks

dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciStackMonitoringMonitoredResourceTasksFilter]] = None,
  id: str = None,
  status: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#compartment_id DataOciStackMonitoringMonitoredResourceTasks#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilter">DataOciStackMonitoringMonitoredResourceTasksFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#id DataOciStackMonitoringMonitoredResourceTasks#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#status DataOciStackMonitoringMonitoredResourceTasks#status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#compartment_id DataOciStackMonitoringMonitoredResourceTasks#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciStackMonitoringMonitoredResourceTasksFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilter">DataOciStackMonitoringMonitoredResourceTasksFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#filter DataOciStackMonitoringMonitoredResourceTasks#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#id DataOciStackMonitoringMonitoredResourceTasks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#status DataOciStackMonitoringMonitoredResourceTasks#status}.

---

### DataOciStackMonitoringMonitoredResourceTasksFilter <a name="DataOciStackMonitoringMonitoredResourceTasksFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_tasks

dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#name DataOciStackMonitoringMonitoredResourceTasks#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#values DataOciStackMonitoringMonitoredResourceTasks#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#regex DataOciStackMonitoringMonitoredResourceTasks#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#name DataOciStackMonitoringMonitoredResourceTasks#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#values DataOciStackMonitoringMonitoredResourceTasks#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resource_tasks#regex DataOciStackMonitoringMonitoredResourceTasks#regex}.

---

### DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollection <a name="DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_tasks

dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollection()
```


### DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItems <a name="DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_tasks

dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItems()
```


### DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetails <a name="DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_tasks

dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciStackMonitoringMonitoredResourceTasksFilterList <a name="DataOciStackMonitoringMonitoredResourceTasksFilterList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_tasks

dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilter">DataOciStackMonitoringMonitoredResourceTasksFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciStackMonitoringMonitoredResourceTasksFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilter">DataOciStackMonitoringMonitoredResourceTasksFilter</a>]]

---


### DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference <a name="DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_tasks

dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilter">DataOciStackMonitoringMonitoredResourceTasksFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciStackMonitoringMonitoredResourceTasksFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksFilter">DataOciStackMonitoringMonitoredResourceTasksFilter</a>]

---


### DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList <a name="DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_tasks

dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference <a name="DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_tasks

dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.taskDetails">task_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList">DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.workRequestIds">work_request_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItems">DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `task_details`<sup>Required</sup> <a name="task_details" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.taskDetails"></a>

```python
task_details: DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList">DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList</a>

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `work_request_ids`<sup>Required</sup> <a name="work_request_ids" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.workRequestIds"></a>

```python
work_request_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItems">DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItems</a>

---


### DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList <a name="DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_tasks

dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference <a name="DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_tasks

dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.availabilityProxyMetricCollectionInterval">availability_proxy_metric_collection_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.availabilityProxyMetrics">availability_proxy_metrics</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.consolePathPrefix">console_path_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.externalIdMapping">external_id_mapping</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.lifecycleStatusMappingsForUpStatus">lifecycle_status_mappings_for_up_status</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.resourceGroup">resource_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.resourceNameFilter">resource_name_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.resourceNameMapping">resource_name_mapping</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.resourceTypeFilter">resource_type_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.resourceTypeMapping">resource_type_mapping</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.serviceBaseUrl">service_base_url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.shouldUseMetricsFlowForStatus">should_use_metrics_flow_for_status</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetails">DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `availability_proxy_metric_collection_interval`<sup>Required</sup> <a name="availability_proxy_metric_collection_interval" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.availabilityProxyMetricCollectionInterval"></a>

```python
availability_proxy_metric_collection_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `availability_proxy_metrics`<sup>Required</sup> <a name="availability_proxy_metrics" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.availabilityProxyMetrics"></a>

```python
availability_proxy_metrics: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `console_path_prefix`<sup>Required</sup> <a name="console_path_prefix" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.consolePathPrefix"></a>

```python
console_path_prefix: str
```

- *Type:* str

---

##### `external_id_mapping`<sup>Required</sup> <a name="external_id_mapping" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.externalIdMapping"></a>

```python
external_id_mapping: str
```

- *Type:* str

---

##### `lifecycle_status_mappings_for_up_status`<sup>Required</sup> <a name="lifecycle_status_mappings_for_up_status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.lifecycleStatusMappingsForUpStatus"></a>

```python
lifecycle_status_mappings_for_up_status: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `resource_group`<sup>Required</sup> <a name="resource_group" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

---

##### `resource_name_filter`<sup>Required</sup> <a name="resource_name_filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.resourceNameFilter"></a>

```python
resource_name_filter: str
```

- *Type:* str

---

##### `resource_name_mapping`<sup>Required</sup> <a name="resource_name_mapping" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.resourceNameMapping"></a>

```python
resource_name_mapping: str
```

- *Type:* str

---

##### `resource_type_filter`<sup>Required</sup> <a name="resource_type_filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.resourceTypeFilter"></a>

```python
resource_type_filter: str
```

- *Type:* str

---

##### `resource_type_mapping`<sup>Required</sup> <a name="resource_type_mapping" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.resourceTypeMapping"></a>

```python
resource_type_mapping: str
```

- *Type:* str

---

##### `service_base_url`<sup>Required</sup> <a name="service_base_url" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.serviceBaseUrl"></a>

```python
service_base_url: str
```

- *Type:* str

---

##### `should_use_metrics_flow_for_status`<sup>Required</sup> <a name="should_use_metrics_flow_for_status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.shouldUseMetricsFlowForStatus"></a>

```python
should_use_metrics_flow_for_status: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetails">DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsTaskDetails</a>

---


### DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList <a name="DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_tasks

dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference <a name="DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resource_tasks

dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList">DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollection">DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.property.items"></a>

```python
items: DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList">DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResourceTasks.DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollection">DataOciStackMonitoringMonitoredResourceTasksMonitoredResourceTasksCollection</a>

---



