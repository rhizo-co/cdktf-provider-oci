# `dataOciOsmanagementManagedInstanceEventReport` Submodule <a name="`dataOciOsmanagementManagedInstanceEventReport` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsmanagementManagedInstanceEventReport <a name="DataOciOsmanagementManagedInstanceEventReport" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report oci_osmanagement_managed_instance_event_report}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_event_report

dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport(
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
  managed_instance_id: str,
  id: str = None,
  latest_timestamp_greater_than_or_equal_to: str = None,
  latest_timestamp_less_than: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report#compartment_id DataOciOsmanagementManagedInstanceEventReport#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.Initializer.parameter.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report#managed_instance_id DataOciOsmanagementManagedInstanceEventReport#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report#id DataOciOsmanagementManagedInstanceEventReport#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.Initializer.parameter.latestTimestampGreaterThanOrEqualTo">latest_timestamp_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report#latest_timestamp_greater_than_or_equal_to DataOciOsmanagementManagedInstanceEventReport#latest_timestamp_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.Initializer.parameter.latestTimestampLessThan">latest_timestamp_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report#latest_timestamp_less_than DataOciOsmanagementManagedInstanceEventReport#latest_timestamp_less_than}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report#compartment_id DataOciOsmanagementManagedInstanceEventReport#compartment_id}.

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.Initializer.parameter.managedInstanceId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report#managed_instance_id DataOciOsmanagementManagedInstanceEventReport#managed_instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report#id DataOciOsmanagementManagedInstanceEventReport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `latest_timestamp_greater_than_or_equal_to`<sup>Optional</sup> <a name="latest_timestamp_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.Initializer.parameter.latestTimestampGreaterThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report#latest_timestamp_greater_than_or_equal_to DataOciOsmanagementManagedInstanceEventReport#latest_timestamp_greater_than_or_equal_to}.

---

##### `latest_timestamp_less_than`<sup>Optional</sup> <a name="latest_timestamp_less_than" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.Initializer.parameter.latestTimestampLessThan"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report#latest_timestamp_less_than DataOciOsmanagementManagedInstanceEventReport#latest_timestamp_less_than}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.resetLatestTimestampGreaterThanOrEqualTo">reset_latest_timestamp_greater_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.resetLatestTimestampLessThan">reset_latest_timestamp_less_than</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_latest_timestamp_greater_than_or_equal_to` <a name="reset_latest_timestamp_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.resetLatestTimestampGreaterThanOrEqualTo"></a>

```python
def reset_latest_timestamp_greater_than_or_equal_to() -> None
```

##### `reset_latest_timestamp_less_than` <a name="reset_latest_timestamp_less_than" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.resetLatestTimestampLessThan"></a>

```python
def reset_latest_timestamp_less_than() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOsmanagementManagedInstanceEventReport resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_event_report

dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_event_report

dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_event_report

dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_event_report

dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOsmanagementManagedInstanceEventReport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOsmanagementManagedInstanceEventReport to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOsmanagementManagedInstanceEventReport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsmanagementManagedInstanceEventReport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.counts">counts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.latestTimestampGreaterThanOrEqualToInput">latest_timestamp_greater_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.latestTimestampLessThanInput">latest_timestamp_less_than_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.managedInstanceIdInput">managed_instance_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.latestTimestampGreaterThanOrEqualTo">latest_timestamp_greater_than_or_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.latestTimestampLessThan">latest_timestamp_less_than</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `counts`<sup>Required</sup> <a name="counts" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.counts"></a>

```python
counts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `latest_timestamp_greater_than_or_equal_to_input`<sup>Optional</sup> <a name="latest_timestamp_greater_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.latestTimestampGreaterThanOrEqualToInput"></a>

```python
latest_timestamp_greater_than_or_equal_to_input: str
```

- *Type:* str

---

##### `latest_timestamp_less_than_input`<sup>Optional</sup> <a name="latest_timestamp_less_than_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.latestTimestampLessThanInput"></a>

```python
latest_timestamp_less_than_input: str
```

- *Type:* str

---

##### `managed_instance_id_input`<sup>Optional</sup> <a name="managed_instance_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.managedInstanceIdInput"></a>

```python
managed_instance_id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `latest_timestamp_greater_than_or_equal_to`<sup>Required</sup> <a name="latest_timestamp_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.latestTimestampGreaterThanOrEqualTo"></a>

```python
latest_timestamp_greater_than_or_equal_to: str
```

- *Type:* str

---

##### `latest_timestamp_less_than`<sup>Required</sup> <a name="latest_timestamp_less_than" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.latestTimestampLessThan"></a>

```python
latest_timestamp_less_than: str
```

- *Type:* str

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReport.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsmanagementManagedInstanceEventReportConfig <a name="DataOciOsmanagementManagedInstanceEventReportConfig" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osmanagement_managed_instance_event_report

dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  managed_instance_id: str,
  id: str = None,
  latest_timestamp_greater_than_or_equal_to: str = None,
  latest_timestamp_less_than: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report#compartment_id DataOciOsmanagementManagedInstanceEventReport#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.managedInstanceId">managed_instance_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report#managed_instance_id DataOciOsmanagementManagedInstanceEventReport#managed_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report#id DataOciOsmanagementManagedInstanceEventReport#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.latestTimestampGreaterThanOrEqualTo">latest_timestamp_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report#latest_timestamp_greater_than_or_equal_to DataOciOsmanagementManagedInstanceEventReport#latest_timestamp_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.latestTimestampLessThan">latest_timestamp_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report#latest_timestamp_less_than DataOciOsmanagementManagedInstanceEventReport#latest_timestamp_less_than}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report#compartment_id DataOciOsmanagementManagedInstanceEventReport#compartment_id}.

---

##### `managed_instance_id`<sup>Required</sup> <a name="managed_instance_id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.managedInstanceId"></a>

```python
managed_instance_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report#managed_instance_id DataOciOsmanagementManagedInstanceEventReport#managed_instance_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report#id DataOciOsmanagementManagedInstanceEventReport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `latest_timestamp_greater_than_or_equal_to`<sup>Optional</sup> <a name="latest_timestamp_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.latestTimestampGreaterThanOrEqualTo"></a>

```python
latest_timestamp_greater_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report#latest_timestamp_greater_than_or_equal_to DataOciOsmanagementManagedInstanceEventReport#latest_timestamp_greater_than_or_equal_to}.

---

##### `latest_timestamp_less_than`<sup>Optional</sup> <a name="latest_timestamp_less_than" id="rhizo-co-terraform-provider-oci.dataOciOsmanagementManagedInstanceEventReport.DataOciOsmanagementManagedInstanceEventReportConfig.property.latestTimestampLessThan"></a>

```python
latest_timestamp_less_than: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osmanagement_managed_instance_event_report#latest_timestamp_less_than DataOciOsmanagementManagedInstanceEventReport#latest_timestamp_less_than}.

---



