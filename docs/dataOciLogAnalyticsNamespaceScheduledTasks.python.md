# `dataOciLogAnalyticsNamespaceScheduledTasks` Submodule <a name="`dataOciLogAnalyticsNamespaceScheduledTasks` Submodule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciLogAnalyticsNamespaceScheduledTasks <a name="DataOciLogAnalyticsNamespaceScheduledTasks" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_tasks oci_log_analytics_namespace_scheduled_tasks}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_scheduled_tasks

dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks(
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
  namespace: str,
  task_type: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciLogAnalyticsNamespaceScheduledTasksFilter]] = None,
  id: str = None,
  target_service: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_tasks#compartment_id DataOciLogAnalyticsNamespaceScheduledTasks#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.Initializer.parameter.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_tasks#namespace DataOciLogAnalyticsNamespaceScheduledTasks#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.Initializer.parameter.taskType">task_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_tasks#task_type DataOciLogAnalyticsNamespaceScheduledTasks#task_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_tasks#display_name DataOciLogAnalyticsNamespaceScheduledTasks#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilter">DataOciLogAnalyticsNamespaceScheduledTasksFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_tasks#id DataOciLogAnalyticsNamespaceScheduledTasks#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.Initializer.parameter.targetService">target_service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_tasks#target_service DataOciLogAnalyticsNamespaceScheduledTasks#target_service}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_tasks#compartment_id DataOciLogAnalyticsNamespaceScheduledTasks#compartment_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.Initializer.parameter.namespace"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_tasks#namespace DataOciLogAnalyticsNamespaceScheduledTasks#namespace}.

---

##### `task_type`<sup>Required</sup> <a name="task_type" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.Initializer.parameter.taskType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_tasks#task_type DataOciLogAnalyticsNamespaceScheduledTasks#task_type}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_tasks#display_name DataOciLogAnalyticsNamespaceScheduledTasks#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilter">DataOciLogAnalyticsNamespaceScheduledTasksFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_tasks#filter DataOciLogAnalyticsNamespaceScheduledTasks#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_tasks#id DataOciLogAnalyticsNamespaceScheduledTasks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `target_service`<sup>Optional</sup> <a name="target_service" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.Initializer.parameter.targetService"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_tasks#target_service DataOciLogAnalyticsNamespaceScheduledTasks#target_service}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.resetTargetService">reset_target_service</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciLogAnalyticsNamespaceScheduledTasksFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilter">DataOciLogAnalyticsNamespaceScheduledTasksFilter</a>]]

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_target_service` <a name="reset_target_service" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.resetTargetService"></a>

```python
def reset_target_service() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceScheduledTasks resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_scheduled_tasks

dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_scheduled_tasks

dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_scheduled_tasks

dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_scheduled_tasks

dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciLogAnalyticsNamespaceScheduledTasks resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciLogAnalyticsNamespaceScheduledTasks to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciLogAnalyticsNamespaceScheduledTasks that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_tasks#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciLogAnalyticsNamespaceScheduledTasks to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterList">DataOciLogAnalyticsNamespaceScheduledTasksFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.scheduledTaskCollection">scheduled_task_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionList">DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilter">DataOciLogAnalyticsNamespaceScheduledTasksFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.targetServiceInput">target_service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.taskTypeInput">task_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.targetService">target_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.taskType">task_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.filter"></a>

```python
filter: DataOciLogAnalyticsNamespaceScheduledTasksFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterList">DataOciLogAnalyticsNamespaceScheduledTasksFilterList</a>

---

##### `scheduled_task_collection`<sup>Required</sup> <a name="scheduled_task_collection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.scheduledTaskCollection"></a>

```python
scheduled_task_collection: DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionList">DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionList</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciLogAnalyticsNamespaceScheduledTasksFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilter">DataOciLogAnalyticsNamespaceScheduledTasksFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `target_service_input`<sup>Optional</sup> <a name="target_service_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.targetServiceInput"></a>

```python
target_service_input: str
```

- *Type:* str

---

##### `task_type_input`<sup>Optional</sup> <a name="task_type_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.taskTypeInput"></a>

```python
task_type_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `target_service`<sup>Required</sup> <a name="target_service" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.targetService"></a>

```python
target_service: str
```

- *Type:* str

---

##### `task_type`<sup>Required</sup> <a name="task_type" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.taskType"></a>

```python
task_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasks.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciLogAnalyticsNamespaceScheduledTasksConfig <a name="DataOciLogAnalyticsNamespaceScheduledTasksConfig" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_scheduled_tasks

dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  namespace: str,
  task_type: str,
  display_name: str = None,
  filter: typing.Union[IResolvable, typing.List[DataOciLogAnalyticsNamespaceScheduledTasksFilter]] = None,
  id: str = None,
  target_service: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_tasks#compartment_id DataOciLogAnalyticsNamespaceScheduledTasks#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksConfig.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_tasks#namespace DataOciLogAnalyticsNamespaceScheduledTasks#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksConfig.property.taskType">task_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_tasks#task_type DataOciLogAnalyticsNamespaceScheduledTasks#task_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_tasks#display_name DataOciLogAnalyticsNamespaceScheduledTasks#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilter">DataOciLogAnalyticsNamespaceScheduledTasksFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_tasks#id DataOciLogAnalyticsNamespaceScheduledTasks#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksConfig.property.targetService">target_service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_tasks#target_service DataOciLogAnalyticsNamespaceScheduledTasks#target_service}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_tasks#compartment_id DataOciLogAnalyticsNamespaceScheduledTasks#compartment_id}.

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksConfig.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_tasks#namespace DataOciLogAnalyticsNamespaceScheduledTasks#namespace}.

---

##### `task_type`<sup>Required</sup> <a name="task_type" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksConfig.property.taskType"></a>

```python
task_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_tasks#task_type DataOciLogAnalyticsNamespaceScheduledTasks#task_type}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_tasks#display_name DataOciLogAnalyticsNamespaceScheduledTasks#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciLogAnalyticsNamespaceScheduledTasksFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilter">DataOciLogAnalyticsNamespaceScheduledTasksFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_tasks#filter DataOciLogAnalyticsNamespaceScheduledTasks#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_tasks#id DataOciLogAnalyticsNamespaceScheduledTasks#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `target_service`<sup>Optional</sup> <a name="target_service" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksConfig.property.targetService"></a>

```python
target_service: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_tasks#target_service DataOciLogAnalyticsNamespaceScheduledTasks#target_service}.

---

### DataOciLogAnalyticsNamespaceScheduledTasksFilter <a name="DataOciLogAnalyticsNamespaceScheduledTasksFilter" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_scheduled_tasks

dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_tasks#name DataOciLogAnalyticsNamespaceScheduledTasks#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_tasks#values DataOciLogAnalyticsNamespaceScheduledTasks#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_tasks#regex DataOciLogAnalyticsNamespaceScheduledTasks#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_tasks#name DataOciLogAnalyticsNamespaceScheduledTasks#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_tasks#values DataOciLogAnalyticsNamespaceScheduledTasks#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/log_analytics_namespace_scheduled_tasks#regex DataOciLogAnalyticsNamespaceScheduledTasks#regex}.

---

### DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollection <a name="DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollection" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_scheduled_tasks

dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollection()
```


### DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItems <a name="DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_scheduled_tasks

dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItems()
```


### DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsAction <a name="DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsAction" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsAction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsAction.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_scheduled_tasks

dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsAction()
```


### DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtraction <a name="DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtraction" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtraction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtraction.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_scheduled_tasks

dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtraction()
```


### DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedules <a name="DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedules" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedules.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_scheduled_tasks

dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedules()
```


### DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesSchedule <a name="DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesSchedule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesSchedule"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesSchedule.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_scheduled_tasks

dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesSchedule()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciLogAnalyticsNamespaceScheduledTasksFilterList <a name="DataOciLogAnalyticsNamespaceScheduledTasksFilterList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_scheduled_tasks

dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilter">DataOciLogAnalyticsNamespaceScheduledTasksFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciLogAnalyticsNamespaceScheduledTasksFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilter">DataOciLogAnalyticsNamespaceScheduledTasksFilter</a>]]

---


### DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference <a name="DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_scheduled_tasks

dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilter">DataOciLogAnalyticsNamespaceScheduledTasksFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciLogAnalyticsNamespaceScheduledTasksFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksFilter">DataOciLogAnalyticsNamespaceScheduledTasksFilter</a>]

---


### DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionList <a name="DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_scheduled_tasks

dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionList <a name="DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_scheduled_tasks

dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference <a name="DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_scheduled_tasks

dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.property.metricName">metric_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.property.resourceGroup">resource_group</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtraction">DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtraction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `metric_name`<sup>Required</sup> <a name="metric_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.property.metricName"></a>

```python
metric_name: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `resource_group`<sup>Required</sup> <a name="resource_group" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.property.resourceGroup"></a>

```python
resource_group: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtraction
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtraction">DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtraction</a>

---


### DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference <a name="DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_scheduled_tasks

dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.property.compartmentIdInSubtree">compartment_id_in_subtree</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.property.metricExtraction">metric_extraction</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionList">DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.property.purgeCompartmentId">purge_compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.property.purgeDuration">purge_duration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.property.queryString">query_string</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.property.savedSearchId">saved_search_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsAction">DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `compartment_id_in_subtree`<sup>Required</sup> <a name="compartment_id_in_subtree" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.property.compartmentIdInSubtree"></a>

```python
compartment_id_in_subtree: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `metric_extraction`<sup>Required</sup> <a name="metric_extraction" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.property.metricExtraction"></a>

```python
metric_extraction: DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionList">DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionMetricExtractionList</a>

---

##### `purge_compartment_id`<sup>Required</sup> <a name="purge_compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.property.purgeCompartmentId"></a>

```python
purge_compartment_id: str
```

- *Type:* str

---

##### `purge_duration`<sup>Required</sup> <a name="purge_duration" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.property.purgeDuration"></a>

```python
purge_duration: str
```

- *Type:* str

---

##### `query_string`<sup>Required</sup> <a name="query_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.property.queryString"></a>

```python
query_string: str
```

- *Type:* str

---

##### `saved_search_id`<sup>Required</sup> <a name="saved_search_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.property.savedSearchId"></a>

```python
saved_search_id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsAction
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsAction">DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsAction</a>

---


### DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsList <a name="DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_scheduled_tasks

dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference <a name="DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_scheduled_tasks

dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.action">action</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionList">DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.kind">kind</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.numOccurrences">num_occurrences</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.savedSearchId">saved_search_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.scheduledTaskId">scheduled_task_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.schedules">schedules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesList">DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.taskStatus">task_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.taskType">task_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.workRequestId">work_request_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItems">DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.action"></a>

```python
action: DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionList">DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsActionList</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `kind`<sup>Required</sup> <a name="kind" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.kind"></a>

```python
kind: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `num_occurrences`<sup>Required</sup> <a name="num_occurrences" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.numOccurrences"></a>

```python
num_occurrences: str
```

- *Type:* str

---

##### `saved_search_id`<sup>Required</sup> <a name="saved_search_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.savedSearchId"></a>

```python
saved_search_id: str
```

- *Type:* str

---

##### `scheduled_task_id`<sup>Required</sup> <a name="scheduled_task_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.scheduledTaskId"></a>

```python
scheduled_task_id: str
```

- *Type:* str

---

##### `schedules`<sup>Required</sup> <a name="schedules" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.schedules"></a>

```python
schedules: DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesList">DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `task_status`<sup>Required</sup> <a name="task_status" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.taskStatus"></a>

```python
task_status: str
```

- *Type:* str

---

##### `task_type`<sup>Required</sup> <a name="task_type" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.taskType"></a>

```python
task_type: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `work_request_id`<sup>Required</sup> <a name="work_request_id" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.workRequestId"></a>

```python
work_request_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItems">DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItems</a>

---


### DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesList <a name="DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_scheduled_tasks

dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference <a name="DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_scheduled_tasks

dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.property.schedule">schedule</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleList">DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedules">DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.property.schedule"></a>

```python
schedule: DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleList">DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedules">DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedules</a>

---


### DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleList <a name="DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_scheduled_tasks

dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference <a name="DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_scheduled_tasks

dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.property.misfirePolicy">misfire_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.property.recurringInterval">recurring_interval</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.property.repeatCount">repeat_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesSchedule">DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesSchedule</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `misfire_policy`<sup>Required</sup> <a name="misfire_policy" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.property.misfirePolicy"></a>

```python
misfire_policy: str
```

- *Type:* str

---

##### `recurring_interval`<sup>Required</sup> <a name="recurring_interval" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.property.recurringInterval"></a>

```python
recurring_interval: str
```

- *Type:* str

---

##### `repeat_count`<sup>Required</sup> <a name="repeat_count" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.property.repeatCount"></a>

```python
repeat_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesScheduleOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesSchedule
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesSchedule">DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsSchedulesSchedule</a>

---


### DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionList <a name="DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionList" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_scheduled_tasks

dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference <a name="DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_log_analytics_namespace_scheduled_tasks

dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsList">DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollection">DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.property.items"></a>

```python
items: DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsList">DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciLogAnalyticsNamespaceScheduledTasks.DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollection">DataOciLogAnalyticsNamespaceScheduledTasksScheduledTaskCollection</a>

---



