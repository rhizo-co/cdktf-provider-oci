# `dataOciDataSafeMaskingPolicyHealthReportLogs` Submodule <a name="`dataOciDataSafeMaskingPolicyHealthReportLogs` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeMaskingPolicyHealthReportLogs <a name="DataOciDataSafeMaskingPolicyHealthReportLogs" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs oci_data_safe_masking_policy_health_report_logs}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policy_health_report_logs

dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  masking_policy_health_report_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeMaskingPolicyHealthReportLogsFilter]] = None,
  id: str = None,
  message_type: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.maskingPolicyHealthReportId">masking_policy_health_report_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#masking_policy_health_report_id DataOciDataSafeMaskingPolicyHealthReportLogs#masking_policy_health_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter">DataOciDataSafeMaskingPolicyHealthReportLogsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#id DataOciDataSafeMaskingPolicyHealthReportLogs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.messageType">message_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#message_type DataOciDataSafeMaskingPolicyHealthReportLogs#message_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `masking_policy_health_report_id`<sup>Required</sup> <a name="masking_policy_health_report_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.maskingPolicyHealthReportId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#masking_policy_health_report_id DataOciDataSafeMaskingPolicyHealthReportLogs#masking_policy_health_report_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter">DataOciDataSafeMaskingPolicyHealthReportLogsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#filter DataOciDataSafeMaskingPolicyHealthReportLogs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#id DataOciDataSafeMaskingPolicyHealthReportLogs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `message_type`<sup>Optional</sup> <a name="message_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.Initializer.parameter.messageType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#message_type DataOciDataSafeMaskingPolicyHealthReportLogs#message_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.resetMessageType">reset_message_type</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciDataSafeMaskingPolicyHealthReportLogsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter">DataOciDataSafeMaskingPolicyHealthReportLogsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_message_type` <a name="reset_message_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.resetMessageType"></a>

```python
def reset_message_type() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDataSafeMaskingPolicyHealthReportLogs resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policy_health_report_logs

dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policy_health_report_logs

dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policy_health_report_logs

dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policy_health_report_logs

dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDataSafeMaskingPolicyHealthReportLogs resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDataSafeMaskingPolicyHealthReportLogs to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDataSafeMaskingPolicyHealthReportLogs that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeMaskingPolicyHealthReportLogs to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList">DataOciDataSafeMaskingPolicyHealthReportLogsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.maskingPolicyHealthReportLogCollection">masking_policy_health_report_log_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList">DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter">DataOciDataSafeMaskingPolicyHealthReportLogsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.maskingPolicyHealthReportIdInput">masking_policy_health_report_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.messageTypeInput">message_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.maskingPolicyHealthReportId">masking_policy_health_report_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.messageType">message_type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.filter"></a>

```python
filter: DataOciDataSafeMaskingPolicyHealthReportLogsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList">DataOciDataSafeMaskingPolicyHealthReportLogsFilterList</a>

---

##### `masking_policy_health_report_log_collection`<sup>Required</sup> <a name="masking_policy_health_report_log_collection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.maskingPolicyHealthReportLogCollection"></a>

```python
masking_policy_health_report_log_collection: DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList">DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciDataSafeMaskingPolicyHealthReportLogsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter">DataOciDataSafeMaskingPolicyHealthReportLogsFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `masking_policy_health_report_id_input`<sup>Optional</sup> <a name="masking_policy_health_report_id_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.maskingPolicyHealthReportIdInput"></a>

```python
masking_policy_health_report_id_input: str
```

- *Type:* str

---

##### `message_type_input`<sup>Optional</sup> <a name="message_type_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.messageTypeInput"></a>

```python
message_type_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `masking_policy_health_report_id`<sup>Required</sup> <a name="masking_policy_health_report_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.maskingPolicyHealthReportId"></a>

```python
masking_policy_health_report_id: str
```

- *Type:* str

---

##### `message_type`<sup>Required</sup> <a name="message_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.messageType"></a>

```python
message_type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogs.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeMaskingPolicyHealthReportLogsConfig <a name="DataOciDataSafeMaskingPolicyHealthReportLogsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policy_health_report_logs

dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  masking_policy_health_report_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciDataSafeMaskingPolicyHealthReportLogsFilter]] = None,
  id: str = None,
  message_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.maskingPolicyHealthReportId">masking_policy_health_report_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#masking_policy_health_report_id DataOciDataSafeMaskingPolicyHealthReportLogs#masking_policy_health_report_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter">DataOciDataSafeMaskingPolicyHealthReportLogsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#id DataOciDataSafeMaskingPolicyHealthReportLogs#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.messageType">message_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#message_type DataOciDataSafeMaskingPolicyHealthReportLogs#message_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `masking_policy_health_report_id`<sup>Required</sup> <a name="masking_policy_health_report_id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.maskingPolicyHealthReportId"></a>

```python
masking_policy_health_report_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#masking_policy_health_report_id DataOciDataSafeMaskingPolicyHealthReportLogs#masking_policy_health_report_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciDataSafeMaskingPolicyHealthReportLogsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter">DataOciDataSafeMaskingPolicyHealthReportLogsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#filter DataOciDataSafeMaskingPolicyHealthReportLogs#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#id DataOciDataSafeMaskingPolicyHealthReportLogs#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `message_type`<sup>Optional</sup> <a name="message_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsConfig.property.messageType"></a>

```python
message_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#message_type DataOciDataSafeMaskingPolicyHealthReportLogs#message_type}.

---

### DataOciDataSafeMaskingPolicyHealthReportLogsFilter <a name="DataOciDataSafeMaskingPolicyHealthReportLogsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policy_health_report_logs

dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#name DataOciDataSafeMaskingPolicyHealthReportLogs#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#values DataOciDataSafeMaskingPolicyHealthReportLogs#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#regex DataOciDataSafeMaskingPolicyHealthReportLogs#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#name DataOciDataSafeMaskingPolicyHealthReportLogs#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#values DataOciDataSafeMaskingPolicyHealthReportLogs#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_masking_policy_health_report_logs#regex DataOciDataSafeMaskingPolicyHealthReportLogs#regex}.

---

### DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollection <a name="DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policy_health_report_logs

dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollection()
```


### DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItems <a name="DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policy_health_report_logs

dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeMaskingPolicyHealthReportLogsFilterList <a name="DataOciDataSafeMaskingPolicyHealthReportLogsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policy_health_report_logs

dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter">DataOciDataSafeMaskingPolicyHealthReportLogsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciDataSafeMaskingPolicyHealthReportLogsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter">DataOciDataSafeMaskingPolicyHealthReportLogsFilter</a>]]

---


### DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference <a name="DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policy_health_report_logs

dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter">DataOciDataSafeMaskingPolicyHealthReportLogsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciDataSafeMaskingPolicyHealthReportLogsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsFilter">DataOciDataSafeMaskingPolicyHealthReportLogsFilter</a>]

---


### DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList <a name="DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policy_health_report_logs

dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference <a name="DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policy_health_report_logs

dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.messageType">message_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.remediation">remediation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.timestamp">timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItems">DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `message_type`<sup>Required</sup> <a name="message_type" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.messageType"></a>

```python
message_type: str
```

- *Type:* str

---

##### `remediation`<sup>Required</sup> <a name="remediation" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.remediation"></a>

```python
remediation: str
```

- *Type:* str

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.timestamp"></a>

```python
timestamp: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItems">DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItems</a>

---


### DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList <a name="DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policy_health_report_logs

dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference <a name="DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_data_safe_masking_policy_health_report_logs

dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList">DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollection">DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.property.items"></a>

```python
items: DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList">DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeMaskingPolicyHealthReportLogs.DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollection">DataOciDataSafeMaskingPolicyHealthReportLogsMaskingPolicyHealthReportLogCollection</a>

---



