# `dataOciStackMonitoringMonitoredResources` Submodule <a name="`dataOciStackMonitoringMonitoredResources` Submodule" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciStackMonitoringMonitoredResources <a name="DataOciStackMonitoringMonitoredResources" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources oci_stack_monitoring_monitored_resources}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources(
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
  filter: typing.Union[IResolvable, typing.List[DataOciStackMonitoringMonitoredResourcesFilter]] = None,
  id: str = None,
  name: str = None,
  status: str = None,
  work_request_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#compartment_id DataOciStackMonitoringMonitoredResources#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter">DataOciStackMonitoringMonitoredResourcesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#id DataOciStackMonitoringMonitoredResources#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#name DataOciStackMonitoringMonitoredResources#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#status DataOciStackMonitoringMonitoredResources#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.workRequestId">work_request_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#work_request_id DataOciStackMonitoringMonitoredResources#work_request_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#compartment_id DataOciStackMonitoringMonitoredResources#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter">DataOciStackMonitoringMonitoredResourcesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#filter DataOciStackMonitoringMonitoredResources#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#id DataOciStackMonitoringMonitoredResources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.name"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#name DataOciStackMonitoringMonitoredResources#name}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.status"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#status DataOciStackMonitoringMonitoredResources#status}.

---

##### `work_request_id`<sup>Optional</sup> <a name="work_request_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.Initializer.parameter.workRequestId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#work_request_id DataOciStackMonitoringMonitoredResources#work_request_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.resetStatus">reset_status</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.resetWorkRequestId">reset_work_request_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciStackMonitoringMonitoredResourcesFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter">DataOciStackMonitoringMonitoredResourcesFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_name` <a name="reset_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_status` <a name="reset_status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.resetStatus"></a>

```python
def reset_status() -> None
```

##### `reset_work_request_id` <a name="reset_work_request_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.resetWorkRequestId"></a>

```python
def reset_work_request_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciStackMonitoringMonitoredResources resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciStackMonitoringMonitoredResources resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciStackMonitoringMonitoredResources to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciStackMonitoringMonitoredResources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciStackMonitoringMonitoredResources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList">DataOciStackMonitoringMonitoredResourcesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.monitoredResourceCollection">monitored_resource_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter">DataOciStackMonitoringMonitoredResourcesFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.statusInput">status_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.workRequestIdInput">work_request_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.workRequestId">work_request_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.filter"></a>

```python
filter: DataOciStackMonitoringMonitoredResourcesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList">DataOciStackMonitoringMonitoredResourcesFilterList</a>

---

##### `monitored_resource_collection`<sup>Required</sup> <a name="monitored_resource_collection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.monitoredResourceCollection"></a>

```python
monitored_resource_collection: DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciStackMonitoringMonitoredResourcesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter">DataOciStackMonitoringMonitoredResourcesFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `status_input`<sup>Optional</sup> <a name="status_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.statusInput"></a>

```python
status_input: str
```

- *Type:* str

---

##### `work_request_id_input`<sup>Optional</sup> <a name="work_request_id_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.workRequestIdInput"></a>

```python
work_request_id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `work_request_id`<sup>Required</sup> <a name="work_request_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.workRequestId"></a>

```python
work_request_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResources.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciStackMonitoringMonitoredResourcesConfig <a name="DataOciStackMonitoringMonitoredResourcesConfig" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciStackMonitoringMonitoredResourcesFilter]] = None,
  id: str = None,
  name: str = None,
  status: str = None,
  work_request_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#compartment_id DataOciStackMonitoringMonitoredResources#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter">DataOciStackMonitoringMonitoredResourcesFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#id DataOciStackMonitoringMonitoredResources#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#name DataOciStackMonitoringMonitoredResources#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.status">status</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#status DataOciStackMonitoringMonitoredResources#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.workRequestId">work_request_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#work_request_id DataOciStackMonitoringMonitoredResources#work_request_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#compartment_id DataOciStackMonitoringMonitoredResources#compartment_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciStackMonitoringMonitoredResourcesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter">DataOciStackMonitoringMonitoredResourcesFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#filter DataOciStackMonitoringMonitoredResources#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#id DataOciStackMonitoringMonitoredResources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#name DataOciStackMonitoringMonitoredResources#name}.

---

##### `status`<sup>Optional</sup> <a name="status" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.status"></a>

```python
status: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#status DataOciStackMonitoringMonitoredResources#status}.

---

##### `work_request_id`<sup>Optional</sup> <a name="work_request_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesConfig.property.workRequestId"></a>

```python
work_request_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#work_request_id DataOciStackMonitoringMonitoredResources#work_request_id}.

---

### DataOciStackMonitoringMonitoredResourcesFilter <a name="DataOciStackMonitoringMonitoredResourcesFilter" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#name DataOciStackMonitoringMonitoredResources#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#values DataOciStackMonitoringMonitoredResources#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#regex DataOciStackMonitoringMonitoredResources#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#name DataOciStackMonitoringMonitoredResources#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#values DataOciStackMonitoringMonitoredResources#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/stack_monitoring_monitored_resources#regex DataOciStackMonitoringMonitoredResources#regex}.

---

### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollection <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollection" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollection()
```


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItems <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItems()
```


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliases <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliases" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliases"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliases.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliases()
```


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredential <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredential" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredential"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredential.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredential()
```


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentials <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentials" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentials.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentials()
```


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsProperties <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsProperties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsProperties.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsProperties()
```


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliases <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliases" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliases"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliases.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliases()
```


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredential <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredential" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredential"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredential.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredential()
```


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentials <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentials" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentials.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentials()
```


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsProperties <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsProperties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsProperties.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsProperties()
```


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetails <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetails" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetails()
```


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsProperties <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsProperties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsProperties"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsProperties.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsProperties()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciStackMonitoringMonitoredResourcesFilterList <a name="DataOciStackMonitoringMonitoredResourcesFilterList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringMonitoredResourcesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter">DataOciStackMonitoringMonitoredResourcesFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciStackMonitoringMonitoredResourcesFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter">DataOciStackMonitoringMonitoredResourcesFilter</a>]]

---


### DataOciStackMonitoringMonitoredResourcesFilterOutputReference <a name="DataOciStackMonitoringMonitoredResourcesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter">DataOciStackMonitoringMonitoredResourcesFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciStackMonitoringMonitoredResourcesFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesFilter">DataOciStackMonitoringMonitoredResourcesFilter</a>]

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredential">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredential</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialOutputReference.property.internalValue"></a>

```python
internal_value: DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredential
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredential">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredential</a>

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.property.credential">credential</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliases">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliases</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credential`<sup>Required</sup> <a name="credential" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.property.credential"></a>

```python
credential: DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesCredentialList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliases
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliases">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliases</a>

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.credentialType">credential_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.properties">properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentials">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credential_type`<sup>Required</sup> <a name="credential_type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.credentialType"></a>

```python
credential_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.properties"></a>

```python
properties: DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentials">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentials</a>

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsProperties">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsProperties
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsProperties">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsProperties</a>

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredential">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredential</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialOutputReference.property.internalValue"></a>

```python
internal_value: DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredential
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredential">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredential</a>

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.property.credential">credential</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliases">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliases</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credential`<sup>Required</sup> <a name="credential" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.property.credential"></a>

```python
credential: DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesCredentialList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliases
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliases">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliases</a>

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.credentialType">credential_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.keyId">key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.properties">properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentials">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credential_type`<sup>Required</sup> <a name="credential_type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.credentialType"></a>

```python
credential_type: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `key_id`<sup>Required</sup> <a name="key_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.keyId"></a>

```python
key_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.properties"></a>

```python
properties: DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList</a>

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentials">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentials</a>

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsProperties">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsProperties
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsProperties">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsProperties</a>

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.connectorId">connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.dbId">db_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.dbUniqueName">db_unique_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.serviceName">service_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.sslSecretId">ssl_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetails">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connector_id`<sup>Required</sup> <a name="connector_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.connectorId"></a>

```python
connector_id: str
```

- *Type:* str

---

##### `db_id`<sup>Required</sup> <a name="db_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.dbId"></a>

```python
db_id: str
```

- *Type:* str

---

##### `db_unique_name`<sup>Required</sup> <a name="db_unique_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.dbUniqueName"></a>

```python
db_unique_name: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `service_name`<sup>Required</sup> <a name="service_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.serviceName"></a>

```python
service_name: str
```

- *Type:* str

---

##### `ssl_secret_id`<sup>Required</sup> <a name="ssl_secret_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.sslSecretId"></a>

```python
ssl_secret_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetails">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetails</a>

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.additionalAliases">additional_aliases</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.additionalCredentials">additional_credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.aliases">aliases</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.credentials">credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.databaseConnectionDetails">database_connection_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.externalId">external_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.externalResourceId">external_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.hostName">host_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.license">license</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.managementAgentId">management_agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.properties">properties</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.resourceCategory">resource_category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.resourceTimeZone">resource_time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItems">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_aliases`<sup>Required</sup> <a name="additional_aliases" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.additionalAliases"></a>

```python
additional_aliases: DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalAliasesList</a>

---

##### `additional_credentials`<sup>Required</sup> <a name="additional_credentials" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.additionalCredentials"></a>

```python
additional_credentials: DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAdditionalCredentialsList</a>

---

##### `aliases`<sup>Required</sup> <a name="aliases" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.aliases"></a>

```python
aliases: DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsAliasesList</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.credentials"></a>

```python
credentials: DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsCredentialsList</a>

---

##### `database_connection_details`<sup>Required</sup> <a name="database_connection_details" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.databaseConnectionDetails"></a>

```python
database_connection_details: DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsDatabaseConnectionDetailsList</a>

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `external_id`<sup>Required</sup> <a name="external_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.externalId"></a>

```python
external_id: str
```

- *Type:* str

---

##### `external_resource_id`<sup>Required</sup> <a name="external_resource_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.externalResourceId"></a>

```python
external_resource_id: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `host_name`<sup>Required</sup> <a name="host_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.hostName"></a>

```python
host_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `license`<sup>Required</sup> <a name="license" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.license"></a>

```python
license: str
```

- *Type:* str

---

##### `management_agent_id`<sup>Required</sup> <a name="management_agent_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.managementAgentId"></a>

```python
management_agent_id: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `properties`<sup>Required</sup> <a name="properties" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.properties"></a>

```python
properties: DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList</a>

---

##### `resource_category`<sup>Required</sup> <a name="resource_category" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.resourceCategory"></a>

```python
resource_category: str
```

- *Type:* str

---

##### `resource_time_zone`<sup>Required</sup> <a name="resource_time_zone" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.resourceTimeZone"></a>

```python
resource_time_zone: str
```

- *Type:* str

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItems">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItems</a>

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsProperties">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsProperties</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsPropertiesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsProperties
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsProperties">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsProperties</a>

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference <a name="DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_stack_monitoring_monitored_resources

dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollection">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.property.items"></a>

```python
items: DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciStackMonitoringMonitoredResources.DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollection">DataOciStackMonitoringMonitoredResourcesMonitoredResourceCollection</a>

---



